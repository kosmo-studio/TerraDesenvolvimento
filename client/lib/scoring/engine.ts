import type {
  DimensaoCodigo,
  InitialScoringResult,
  MaturidadeRespostas,
  ScoringInput,
  ScoringResult,
  SituacaoRespostas,
} from "./types";
import {
  COMPLEMENTO_AUDITORIA_REBANHO,
  COMPLEMENTO_CURSO_GESTAO,
  COMPLEMENTO_PERFORMA,
  DIMENSAO_LABELS,
  LIMITE_HECTARES_PERFORMA,
  NIVEL_LABELS,
  SERVICO_ANALISE_NEGOCIO,
  SERVICO_POR_NIVEL,
  SERVICO_PRG,
  SITUACAO_AVALIANDO_COMPRA,
  SITUACAO_CONFLITO_INTERNO,
  SITUACAO_QUER_DELEGAR,
} from "./labels";

const DIMENSOES_ORDEM: DimensaoCodigo[] = ["N", "P", "E", "X"];

const CHAVES_POR_DIMENSAO: Record<DimensaoCodigo, (keyof MaturidadeRespostas)[]> = {
  N: ["N1", "N2", "N3"],
  P: ["P1", "P2", "P3"],
  E: ["E1", "E2", "E3"],
  X: ["X1", "X2", "X3"],
};

function media(respostas: MaturidadeRespostas, chaves: (keyof MaturidadeRespostas)[]) {
  const soma = chaves.reduce((acc, chave) => acc + respostas[chave], 0);
  return soma / chaves.length;
}

function calcularMediasPorDimensao(respostas: MaturidadeRespostas) {
  const resultado = {} as Record<DimensaoCodigo, number>;
  for (const dimensao of DIMENSOES_ORDEM) {
    resultado[dimensao] = media(respostas, CHAVES_POR_DIMENSAO[dimensao]);
  }
  return resultado;
}

function calcularMediaGeral(respostas: MaturidadeRespostas) {
  const todasChaves = DIMENSOES_ORDEM.flatMap((d) => CHAVES_POR_DIMENSAO[d]);
  const soma = todasChaves.reduce((acc, chave) => acc + respostas[chave], 0);
  return soma / todasChaves.length;
}

function calcularNivel(mediaGeral: number): 1 | 2 | 3 | 4 | 5 {
  if (mediaGeral <= 1.8) return 1;
  if (mediaGeral <= 2.6) return 2;
  if (mediaGeral <= 3.4) return 3;
  if (mediaGeral <= 4.2) return 4;
  return 5;
}

function calcularDimensaoMaisFraca(medias: Record<DimensaoCodigo, number>) {
  return DIMENSOES_ORDEM.reduce((maisFraca, atual) =>
    medias[atual] < medias[maisFraca] ? atual : maisFraca,
  );
}

function calcularSituacaoEspecial(situacao: SituacaoRespostas) {
  const situacoes: string[] = [];
  if (situacao.S2 === "quer_delegar") situacoes.push(SITUACAO_QUER_DELEGAR);
  if (situacao.S3 === "sim") situacoes.push(SITUACAO_CONFLITO_INTERNO);
  if (situacao.S1 === "avaliando_compra") situacoes.push(SITUACAO_AVALIANDO_COMPRA);
  return situacoes;
}

function calcularServicoPrincipal(situacaoEspecial: string[], nivel: 1 | 2 | 3 | 4 | 5) {
  if (
    situacaoEspecial.includes(SITUACAO_QUER_DELEGAR) ||
    situacaoEspecial.includes(SITUACAO_CONFLITO_INTERNO)
  ) {
    return SERVICO_PRG;
  }
  if (situacaoEspecial.includes(SITUACAO_AVALIANDO_COMPRA)) {
    return SERVICO_ANALISE_NEGOCIO;
  }
  return SERVICO_POR_NIVEL[nivel];
}

function calcularServicosComplementares(
  situacao: SituacaoRespostas,
  tamanhoHectares: number | undefined,
) {
  const complementos: string[] = [COMPLEMENTO_CURSO_GESTAO];
  if (situacao.S4 === "nao") complementos.push(COMPLEMENTO_AUDITORIA_REBANHO);
  if (tamanhoHectares !== undefined && tamanhoHectares <= LIMITE_HECTARES_PERFORMA) {
    complementos.push(COMPLEMENTO_PERFORMA);
  }
  return complementos;
}

export function calcularDiagnosticoInicial(respostas: MaturidadeRespostas): InitialScoringResult {
  const mediasPorDimensao = calcularMediasPorDimensao(respostas);
  const mediaGeral = calcularMediaGeral(respostas);
  const nivel = calcularNivel(mediaGeral);
  const dimensaoMaisFraca = calcularDimensaoMaisFraca(mediasPorDimensao);

  return {
    mediasPorDimensao,
    mediaGeral,
    nivel,
    nivelLabel: NIVEL_LABELS[nivel],
    dimensaoMaisFraca,
    dimensaoMaisFracaLabel: DIMENSAO_LABELS[dimensaoMaisFraca],
  };
}

export function calcularResultado(input: ScoringInput): ScoringResult | InitialScoringResult {
  const diagnostico = calcularDiagnosticoInicial(input.respostas);

  if (!input.situacao) {
    return diagnostico;
  }

  const { nivel } = diagnostico;
  const situacaoEspecial = calcularSituacaoEspecial(input.situacao);
  const servicoPrincipal = calcularServicoPrincipal(situacaoEspecial, nivel);
  const servicosComplementares = calcularServicosComplementares(input.situacao, input.tamanhoHectares);

  return {
    ...diagnostico,
    servicoPrincipal,
    servicosComplementares,
    situacaoEspecial,
  };
}

export function calcularResultadoCompleto(input: ScoringInput & { situacao: SituacaoRespostas }): ScoringResult {
  const mediasPorDimensao = calcularMediasPorDimensao(input.respostas);
  const mediaGeral = calcularMediaGeral(input.respostas);
  const nivel = calcularNivel(mediaGeral);
  const dimensaoMaisFraca = calcularDimensaoMaisFraca(mediasPorDimensao);
  const situacaoEspecial = calcularSituacaoEspecial(input.situacao);
  const servicoPrincipal = calcularServicoPrincipal(situacaoEspecial, nivel);
  const servicosComplementares = calcularServicosComplementares(input.situacao, input.tamanhoHectares);

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
