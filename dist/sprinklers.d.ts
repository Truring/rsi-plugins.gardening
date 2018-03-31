import { Resource, Service } from "@rsi/core";
declare class Sprinklers extends Resource {
    protected service: Service;
    constructor(service: Service);
    readonly elementSubscribable: boolean;
}
export { Sprinklers };
