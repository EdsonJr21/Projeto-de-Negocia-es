import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor) as HTMLElement;
  }

  protected abstract template(model: T): string;

  @logarTempoExecucao()
  @inspect()
  public update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }
}
