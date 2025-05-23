import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacaoDoDia[]) => {
        const negociacoesHoje = dados.map(
          (dadosHoje) =>
            new Negociacao(new Date(), dadosHoje.vezes, dadosHoje.montante)
        );
        return negociacoesHoje;
      });
  }
}
