export function MyClassDecorator() {
    return function (target: Function) {
        Reflect.defineMetadata("MyClassDecorator", '', target);
    }
}