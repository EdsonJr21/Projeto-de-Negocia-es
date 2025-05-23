import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivel[]): void {
  objetos.forEach((objeto) => {
    console.log(objeto.paraTexto());
  });
}
