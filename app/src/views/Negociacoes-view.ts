import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./Views.js";

export class NegociacoesView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model
                      .lista()
                      .map((negociacao) => {
                        return `
                            <tr>
                                <td>${this.conversorDeData(
                                  negociacao.data
                                )}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>`;
                      })
                      .join("")}
                </tbody>
            </table>`;
  }

  private conversorDeData(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}
