export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Criando getter para o ${propertyKey} com o seletor ${selector}`
    );

    let elemento: HTMLElement;

    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(selector);
        console.log(`buscando ${selector} para injetar em ${propertyKey}`);
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      enumerable: true,
      configurable: true,
    });
  };
}
