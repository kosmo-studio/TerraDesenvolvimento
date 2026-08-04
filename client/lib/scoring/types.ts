export type DimensaoCodigo = "N" | "P" | "E" | "X";

export type RespostaValor = 1 | 2 | 3 | 4 | 5;

export interface MaturidadeRespostas {
  N1: RespostaValor;
  N2: RespostaValor;
  N3: RespostaValor;
  P1: RespostaValor;
  P2: RespostaValor;
  P3: RespostaValor;
  E1: RespostaValor;
  E2: RespostaValor;
  E3: RespostaValor;
  X1: RespostaValor;
  X2: RespostaValor;
  X3: RespostaValor;
}

export interface SituacaoRespostas {
  S1: "ja_opero" | "avaliando_compra";
  S2: "eu_mesmo" | "quer_delegar";
  S3: "sim" | "nao";
  S4: "sim" | "nao";
}

export interface ScoringInput {
  respostas: MaturidadeRespostas;
  situacao: SituacaoRespostas;
  tamanhoHectares?: number;
}

export interface ScoringResult {
  mediasPorDimensao: Record<DimensaoCodigo, number>;
  mediaGeral: number;
  nivel: 1 | 2 | 3 | 4 | 5;
  nivelLabel: string;
  dimensaoMaisFraca: DimensaoCodigo;
  dimensaoMaisFracaLabel: string;
  servicoPrincipal: string;
  servicosComplementares: string[];
  situacaoEspecial: string[];
}
