import { View } from "./Views.js";
export class MensagemView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
