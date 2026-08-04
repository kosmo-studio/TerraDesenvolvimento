const KOMMO_BASE_URL = "https://api-g.kommo.com";

const PIPELINE_ID = 14233072;
const STATUS_QUALIFICADO = 109897840;
const STATUS_PERFIL_COMPLETO = 109897844;

const FIELDS = {
  nivelMaturidade: 2082901,
  dimensaoMaisFraca: 2082903,
  servicoRecomendado: 2082905,
  servicosComplementares: 2082907,
  situacaoEspecial: 2082909,
  respostasQuiz: 2082913,
  canalEntrada: 660914,
  areaHectares: 661856,
  regiaoCidade: 667074,
};

const CANAL_SITE_ENUM_ID = 494274;

const NIVEL_ENUMS = {
  1: 1656715,
  2: 1656717,
  3: 1656719,
  4: 1656721,
  5: 1656723,
};

const DIMENSAO_ENUMS = {
  N: 1656727,
  P: 1656729,
  E: 1656731,
  X: 1656733,
};

const SERVICO_ENUMS = {
  "Mapeamento de Oportunidades": 1656735,
  "Implantação de Controles": 1656737,
  "Planejamento (Produtivo/Estratégico)": 1656739,
  "Desenvolvimento Gerencial": 1656741,
  "Alta Performance Gerencial": 1656743,
  "Análise e Plano de Negócios": 1656745,
  "PRG - Programa de Recuperação Gerencial": 1656747,
};

const COMPLEMENTO_ENUMS = {
  "Curso de Gestão da Empresa Pecuária": 1656749,
  "Auditoria de Rebanho": 1656751,
  Performa: 1656753,
};

const SITUACAO_ENUMS = {
  "Quer delegar a gestão": 1656755,
  "Conflito interno de confiança": 1656757,
  "Avaliando comprar propriedade": 1656759,
};

function getAccessToken() {
  if (!process.env.KOMMO_ACCESS_TOKEN) {
    throw new Error("KOMMO_ACCESS_TOKEN não configurado.");
  }

  return process.env.KOMMO_ACCESS_TOKEN;
}

async function kommoRequest(path, { method = "POST", body } = {}) {
  const response = await fetch(`${KOMMO_BASE_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = data?.detail || data?.title || data?.error || "Erro na API do Kommo.";
    throw new Error(message);
  }

  return data;
}

function enumField(fieldId, enumId) {
  if (!enumId) return null;
  return { field_id: fieldId, values: [{ enum_id: enumId }] };
}

function multiEnumField(fieldId, enumIds) {
  const values = enumIds.filter(Boolean).map((enum_id) => ({ enum_id }));
  if (!values.length) return null;
  return { field_id: fieldId, values };
}

function valueField(fieldId, value) {
  if (value === undefined || value === null || value === "") return null;
  return { field_id: fieldId, values: [{ value }] };
}

function buildQuizJson(payload) {
  return JSON.stringify({
    respostas: payload.respostas || {},
    situacao: payload.situacao || {},
    perfil: payload.perfil || {},
    resultado: payload.resultado || {},
  });
}

function getComplementoEnumIds(resultado = {}) {
  return (resultado.servicosComplementares || [])
    .map((servico) => COMPLEMENTO_ENUMS[servico])
    .filter(Boolean);
}

function getSituacaoEnumIds(resultado = {}) {
  return (resultado.situacaoEspecial || [])
    .map((situacao) => SITUACAO_ENUMS[situacao])
    .filter(Boolean);
}

async function createContact(lead) {
  const fullName = `${lead.primeiro_nome || ""} ${lead.sobrenome || ""}`.trim() || "Lead Diagnóstico";

  const data = await kommoRequest("/api/v4/contacts", {
    body: [
      {
        name: fullName,
        custom_fields_values: [
          lead.telefone
            ? {
                field_code: "PHONE",
                values: [{ value: lead.telefone }],
              }
            : null,
          lead.email
            ? {
                field_code: "EMAIL",
                values: [{ value: lead.email }],
              }
            : null,
        ].filter(Boolean),
      },
    ],
  });

  return data?._embedded?.contacts?.[0]?.id;
}

async function createQualifiedLead({ contactId, payload }) {
  const { lead = {}, resultado = {} } = payload;
  const fullName = `${lead.primeiro_nome || ""} ${lead.sobrenome || ""}`.trim() || "Lead Diagnóstico";

  const data = await kommoRequest("/api/v4/leads", {
    body: [
      {
        name: `Diagnóstico Maturidade - ${fullName}`,
        pipeline_id: PIPELINE_ID,
        status_id: STATUS_QUALIFICADO,
        _embedded: {
          contacts: [{ id: contactId }],
        },
        custom_fields_values: [
          enumField(FIELDS.nivelMaturidade, NIVEL_ENUMS[resultado.nivel]),
          enumField(FIELDS.dimensaoMaisFraca, DIMENSAO_ENUMS[resultado.dimensaoMaisFraca]),
          enumField(FIELDS.servicoRecomendado, SERVICO_ENUMS[resultado.servicoPrincipal]),
          multiEnumField(FIELDS.servicosComplementares, getComplementoEnumIds(resultado)),
          multiEnumField(FIELDS.situacaoEspecial, getSituacaoEnumIds(resultado)),
          valueField(FIELDS.respostasQuiz, buildQuizJson(payload)),
          enumField(FIELDS.canalEntrada, CANAL_SITE_ENUM_ID),
        ].filter(Boolean),
      },
    ],
  });

  return data?._embedded?.leads?.[0]?.id;
}

async function updateLeadProfile({ leadId, payload }) {
  const { lead = {}, perfil = {}, resultado = {} } = payload;

  await kommoRequest(`/api/v4/leads/${leadId}`, {
    method: "PATCH",
    body: {
      status_id: STATUS_PERFIL_COMPLETO,
      custom_fields_values: [
        valueField(FIELDS.areaHectares, perfil.tamanhoHectares),
        valueField(FIELDS.regiaoCidade, lead.localizacao),
        multiEnumField(FIELDS.servicosComplementares, getComplementoEnumIds(resultado)),
      ].filter(Boolean),
    },
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const contactId = await createContact(req.body.lead || {});
    if (!contactId) throw new Error("Kommo não retornou o ID do contato.");

    const leadId = await createQualifiedLead({ contactId, payload: req.body });
    if (!leadId) throw new Error("Kommo não retornou o ID do lead.");

    await updateLeadProfile({ leadId, payload: req.body });

    return res.status(200).json({ success: true, contactId, leadId });
  } catch (error) {
    console.error("Erro ao enviar lead para Kommo:", error);
    return res.status(500).json({ error: error.message });
  }
}
