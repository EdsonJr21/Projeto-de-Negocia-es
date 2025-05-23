import { Negociacao } from "../models/Negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((dados) => {
            const negociacoesHoje = dados.map((dadosHoje) => new Negociacao(new Date(), dadosHoje.vezes, dadosHoje.montante));
            return negociacoesHoje;
        });
    }
}
