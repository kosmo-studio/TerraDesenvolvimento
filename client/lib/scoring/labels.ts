import type { DimensaoCodigo } from "./types";

export const NIVEL_LABELS: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "1 - Intuitivo",
  2: "2 - Reativo / Organizando",
  3: "3 - Operacional",
  4: "4 - Gerencial",
  5: "5 - Estratégico",
};

export const DIMENSAO_LABELS: Record<DimensaoCodigo, string> = {
  N: "N - Números e Controle",
  P: "P - Planejamento e Metas",
  E: "E - Pessoas e Equipe",
  X: "X - Execução e Processos",
};

export const SERVICO_POR_NIVEL: Record<1 | 2 | 3 | 4 | 5, string> = {
  1: "Mapeamento de Oportunidades",
  2: "Implantação de Controles",
  3: "Planejamento (Produtivo/Estratégico)",
  4: "Desenvolvimento Gerencial",
  5: "Alta Performance Gerencial",
};

export const SERVICO_ANALISE_NEGOCIO = "Análise e Plano de Negócios";
export const SERVICO_PRG = "PRG - Programa de Recuperação Gerencial";

export const COMPLEMENTO_CURSO_GESTAO = "Curso de Gestão da Empresa Pecuária";
export const COMPLEMENTO_AUDITORIA_REBANHO = "Auditoria de Rebanho";
export const COMPLEMENTO_PERFORMA = "Performa";

export const SITUACAO_QUER_DELEGAR = "Quer delegar a gestão";
export const SITUACAO_CONFLITO_INTERNO = "Conflito interno de confiança";
export const SITUACAO_AVALIANDO_COMPRA = "Avaliando comprar propriedade";

export const LIMITE_HECTARES_PERFORMA = 2000;
