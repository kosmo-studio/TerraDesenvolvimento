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

const NIVEL_LABELS = {
  1: "1 - Intuitivo",
  2: "2 - Reativo / Organizando",
  3: "3 - Operacional",
  4: "4 - Gerencial",
  5: "5 - Estratégico",
};

const DIMENSAO_LABELS = {
  N: "N - Números e Controle",
  P: "P - Planejamento e Metas",
  E: "E - Pessoas e Equipe",
  X: "X - Execução e Processos",
};

const SERVICO_POR_NIVEL = {
  1: "Mapeamento de Oportunidades",
  2: "Implantação de Controles",
  3: "Planejamento (Produtivo/Estratégico)",
  4: "Desenvolvimento Gerencial",
  5: "Alta Performance Gerencial",
};

const SERVICO_ANALISE_NEGOCIO = "Análise e Plano de Negócios";
const SERVICO_PRG = "PRG - Programa de Recuperação Gerencial";
const SITUACAO_QUER_DELEGAR = "Quer delegar a gestão";
const SITUACAO_CONFLITO_INTERNO = "Conflito interno de confiança";
const SITUACAO_AVALIANDO_COMPRA = "Avaliando comprar propriedade";
const LIMITE_HECTARES_PERFORMA = 2000;
const RESPOSTA_CHAVES = ["N1", "N2", "N3", "P1", "P2", "P3", "E1", "E2", "E3", "X1", "X2", "X3"];
const DIMENSOES_ORDEM = ["N", "P", "E", "X"];
const CHAVES_POR_DIMENSAO = {
  N: ["N1", "N2", "N3"],
  P: ["P1", "P2", "P3"],
  E: ["E1", "E2", "E3"],
  X: ["X1", "X2", "X3"],
};

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

function validarRespostas(valor) {
  if (!valor || typeof valor !== "object") return false;
  return RESPOSTA_CHAVES.every((chave) => {
    const n = valor[chave];
    return Number.isInteger(n) && n >= 1 && n <= 5;
  });
}

function validarSituacao(valor) {
  if (!valor || typeof valor !== "object") return false;
  return (
    (valor.S1 === "ja_opero" || valor.S1 === "avaliando_compra") &&
    (valor.S2 === "eu_mesmo" || valor.S2 === "quer_delegar") &&
    (valor.S3 === "sim" || valor.S3 === "nao") &&
    (valor.S4 === "sim" || valor.S4 === "nao")
  );
}

function media(respostas, chaves) {
  return chaves.reduce((acc, chave) => acc + respostas[chave], 0) / chaves.length;
}

function calcularResultado(input) {
  const mediasPorDimensao = {};
  for (const dimensao of DIMENSOES_ORDEM) {
    mediasPorDimensao[dimensao] = media(input.respostas, CHAVES_POR_DIMENSAO[dimensao]);
  }

  const mediaGeral = RESPOSTA_CHAVES.reduce((acc, chave) => acc + input.respostas[chave], 0) / RESPOSTA_CHAVES.length;
  const nivel = mediaGeral <= 1.8 ? 1 : mediaGeral <= 2.6 ? 2 : mediaGeral <= 3.4 ? 3 : mediaGeral <= 4.2 ? 4 : 5;
  const dimensaoMaisFraca = DIMENSOES_ORDEM.reduce((maisFraca, atual) =>
    mediasPorDimensao[atual] < mediasPorDimensao[maisFraca] ? atual : maisFraca,
  );

  const situacaoEspecial = [];
  if (input.situacao.S2 === "quer_delegar") situacaoEspecial.push(SITUACAO_QUER_DELEGAR);
  if (input.situacao.S3 === "sim") situacaoEspecial.push(SITUACAO_CONFLITO_INTERNO);
  if (input.situacao.S1 === "avaliando_compra") situacaoEspecial.push(SITUACAO_AVALIANDO_COMPRA);

  const servicoPrincipal =
    situacaoEspecial.includes(SITUACAO_QUER_DELEGAR) || situacaoEspecial.includes(SITUACAO_CONFLITO_INTERNO)
      ? SERVICO_PRG
      : situacaoEspecial.includes(SITUACAO_AVALIANDO_COMPRA)
        ? SERVICO_ANALISE_NEGOCIO
        : SERVICO_POR_NIVEL[nivel];

  const servicosComplementares = ["Curso de Gestão da Empresa Pecuária"];
  if (input.situacao.S4 === "nao") servicosComplementares.push("Auditoria de Rebanho");
  if (input.tamanhoHectares !== undefined && input.tamanhoHectares <= LIMITE_HECTARES_PERFORMA) {
    servicosComplementares.push("Performa");
  }

  return {
    mediasPorDimensao,
    mediaGeral,
    nivel,
    nivelLabel: NIVEL_LABELS[nivel],
    dimensaoMaisFraca,
    dimensaoMaisFracaLabel: DIMENSAO_LABELS[dimensaoMaisFraca],
    servicoPrincipal,
    servicosComplementares,
    situacaoEspecial,
  };
}

async function handleScore(request, env) {
  if (!env.WEBHOOK_SECRET) {
    return json({ erro: "WEBHOOK_SECRET não configurado no Cloudflare." }, 500);
  }

  if (request.headers.get("x-webhook-secret") !== env.WEBHOOK_SECRET) {
    return json({ erro: "Não autorizado." }, 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ erro: "Corpo da requisição não é um JSON válido." }, 400);
  }

  const { respostas, situacao, tamanhoHectares } = body || {};

  if (!validarRespostas(respostas)) {
    return json({ erro: "Campo 'respostas' inválido: esperado N1..X3 com valores inteiros de 1 a 5." }, 400);
  }

  if (!validarSituacao(situacao)) {
    return json({ erro: "Campo 'situacao' inválido: esperado S1..S4 com as chaves previstas." }, 400);
  }

  if (tamanhoHectares !== undefined && (typeof tamanhoHectares !== "number" || tamanhoHectares < 0)) {
    return json({ erro: "Campo 'tamanhoHectares' inválido." }, 400);
  }

  return json(calcularResultado({ respostas, situacao, tamanhoHectares }));
}

async function kommoRequest(env, path, { method = "POST", body } = {}) {
  if (!env.KOMMO_ACCESS_TOKEN) {
    throw new Error("KOMMO_ACCESS_TOKEN não configurado no Cloudflare.");
  }

  if (!env.KOMMO_BASE_URL) {
    throw new Error("KOMMO_BASE_URL não configurado no Cloudflare. Use a URL da conta, no formato https://subdominio.kommo.com.");
  }

  const accessToken = String(env.KOMMO_ACCESS_TOKEN)
    .trim()
    .replace(/^Bearer\s+/i, "")
    .replace(/^["']|["']$/g, "")
    .trim();
  const baseUrl = String(env.KOMMO_BASE_URL)
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/\/$/, "");

  const response = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const validationError = data?.["validation-errors"]?.[0]?.errors?.[0];
    const message =
      (response.status === 401
        ? "Token inválido, expirado, revogado ou colado com valor incorreto no secret KOMMO_ACCESS_TOKEN."
        : null) ||
      data?.detail ||
      data?.title ||
      data?.error ||
      validationError?.detail ||
      validationError?.title ||
      (typeof data === "string" ? data : JSON.stringify(data));

    console.error("Kommo API error", {
      path,
      method,
      baseUrl,
      status: response.status,
      response: data,
      requestBody: body,
    });

    throw new Error(`Kommo ${response.status} em ${baseUrl}${path}: ${message || "erro sem detalhe"}`);
  }

  return data;
}

function normalizeText(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
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
    .map((servico) => {
      const text = normalizeText(servico);
      if (text.includes("auditoria")) return 1656751;
      if (text.includes("performa")) return 1656753;
      if (text.includes("curso")) return 1656749;
      return COMPLEMENTO_ENUMS[servico];
    })
    .filter(Boolean);
}

function getSituacaoEnumIds(resultado = {}) {
  return (resultado.situacaoEspecial || [])
    .map((situacao) => {
      const text = normalizeText(situacao);
      if (text.includes("delegar")) return 1656755;
      if (text.includes("conflito")) return 1656757;
      if (text.includes("avaliando")) return 1656759;
      return SITUACAO_ENUMS[situacao];
    })
    .filter(Boolean);
}

function getServicoEnumId(resultado = {}) {
  const text = normalizeText(resultado.servicoPrincipal);

  if (text.includes("prg") || text.includes("recupera")) return 1656747;
  if (text.includes("analise") || text.includes("negocio")) return 1656745;
  if (text.includes("alta performance")) return 1656743;
  if (text.includes("desenvolvimento")) return 1656741;
  if (text.includes("planejamento")) return 1656739;
  if (text.includes("implant")) return 1656737;
  if (text.includes("mapeamento")) return 1656735;

  return SERVICO_ENUMS[resultado.servicoPrincipal];
}

async function createContact(env, lead) {
  const fullName = `${lead.primeiro_nome || ""} ${lead.sobrenome || ""}`.trim() || "Lead Site";

  const data = await kommoRequest(env, "/api/v4/contacts", {
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

async function createQualifiedLead(env, { contactId, payload }) {
  const { lead = {}, resultado = {} } = payload;
  const fullName = `${lead.primeiro_nome || ""} ${lead.sobrenome || ""}`.trim() || "Lead Diagnóstico";

  const data = await kommoRequest(env, "/api/v4/leads", {
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
          enumField(FIELDS.servicoRecomendado, getServicoEnumId(resultado)),
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

async function updateLeadProfile(env, { leadId, payload }) {
  const { lead = {}, perfil = {}, resultado = {} } = payload;

  await kommoRequest(env, `/api/v4/leads/${leadId}`, {
    method: "PATCH",
    body: {
      status_id: STATUS_PERFIL_COMPLETO,
      custom_fields_values: [
        valueField(FIELDS.areaHectares, perfil.tamanhoHectares),
        valueField(FIELDS.regiaoCidade, lead.localizacao || lead.cidade),
        multiEnumField(FIELDS.servicosComplementares, getComplementoEnumIds(resultado)),
      ].filter(Boolean),
    },
  });
}

async function handleKommoLead(request, env) {
  const payload = await request.json();
  const contactId = await createContact(env, payload.lead || {});
  if (!contactId) throw new Error("Kommo não retornou o ID do contato.");

  const leadId = await createQualifiedLead(env, { contactId, payload });
  if (!leadId) throw new Error("Kommo não retornou o ID do lead.");

  await updateLeadProfile(env, { leadId, payload });

  return json({ success: true, contactId, leadId });
}

async function handleBasicContact(request, env) {
  const body = await request.json();
  const lead = {
    primeiro_nome: body.primeiro_nome,
    sobrenome: body.sobrenome,
    email: body.email,
    telefone: body.telefone,
    localizacao: body.cidade,
  };

  const contactId = await createContact(env, lead);
  const leadId = await createQualifiedLead(env, {
    contactId,
    payload: {
      lead,
      resultado: {},
      respostas: {},
      situacao: {},
      perfil: {},
    },
  });

  return json({ success: true, contactId, leadId });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return json({}, 204);
    }

    try {
      if (url.pathname === "/api/kommo-lead" && request.method === "POST") {
        return await handleKommoLead(request, env);
      }

      if ((url.pathname === "/score" || url.pathname === "/api/score") && request.method === "POST") {
        return await handleScore(request, env);
      }

      if (url.pathname === "/api/send-email" && request.method === "POST") {
        return await handleBasicContact(request, env);
      }
    } catch (error) {
      console.error("Erro na API do Worker:", error);
      return json({ error: error.message }, 500);
    }

    return env.ASSETS.fetch(request);
  },
};
