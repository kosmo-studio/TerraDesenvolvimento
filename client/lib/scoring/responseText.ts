import type { ScoringResult } from "./types";

const INTRODUCOES: Record<ScoringResult["nivel"], string> = {
  1: "Sua gestão ainda depende muito da experiência prática e de decisões tomadas no dia a dia. O maior ganho agora está em organizar informações básicas e transformar rotina em controle.",
  2: "Sua fazenda já iniciou um movimento de organização, mas ainda reage mais aos problemas do que antecipa decisões. O próximo passo é criar constância nos controles e nos indicadores.",
  3: "Sua operação já tem uma base funcional de gestão. Agora, o desafio é transformar controles e rotinas em planejamento, metas claras e decisões mais previsíveis.",
  4: "Sua gestão demonstra boa estrutura gerencial. A oportunidade está em elevar a qualidade das análises, fortalecer a equipe e buscar mais consistência na execução.",
  5: "Sua fazenda apresenta maturidade estratégica. O foco passa a ser manter alta performance, comparar indicadores, antecipar cenários e sustentar melhoria contínua.",
};

export function escreverTextoResultado(resultado: ScoringResult) {
  const complementos = resultado.servicosComplementares.length
    ? ` Também recomendamos avaliar como complemento: ${resultado.servicosComplementares.join(", ")}.`
    : "";

  const situacao = resultado.situacaoEspecial.length
    ? ` Alguns pontos da sua situação atual pedem atenção especial: ${resultado.situacaoEspecial.join(", ")}.`
    : "";

  return `${INTRODUCOES[resultado.nivel]} A dimensão que mais merece atenção neste momento é ${resultado.dimensaoMaisFracaLabel}. Por isso, o caminho indicado pela Terra é ${resultado.servicoPrincipal}.${complementos}${situacao}`;
}
