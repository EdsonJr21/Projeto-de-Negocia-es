import { NegociacaoController } from "./controllers/Negociacao-Controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
const botaoImporta = document.querySelector("#botao-importa");
botaoImporta.addEventListener("click", () => {
    controller.importaDados();
});
