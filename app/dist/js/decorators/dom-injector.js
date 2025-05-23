export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Criando getter para o ${propertyKey} com o seletor ${selector}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
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
