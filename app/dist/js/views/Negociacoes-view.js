import { View } from "./Views.js";
export class NegociacoesView extends View {
    template(model) {
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
                                <td>${this.conversorDeData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>`;
        })
            .join("")}
                </tbody>
            </table>`;
    }
    conversorDeData(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
