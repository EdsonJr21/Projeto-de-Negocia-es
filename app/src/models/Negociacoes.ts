import { modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes implements modelo<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return this.negociacoes.map((n) => n.paraTexto()).join("\n");
  }

  public ehIgual(objeto: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
  }
}
