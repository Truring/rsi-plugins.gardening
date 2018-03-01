import { CollectionResponse, ElementResponse, Resource, Service } from "@rsi/core";
declare class Sprinklers extends Resource {
    protected service: Service;
    private sprinklers;
    constructor(service: Service);
    readonly elementSubscribable: boolean;
    getElement(elementId: string): Promise<ElementResponse>;
    getResource(offset?: string | number, limit?: string | number): Promise<CollectionResponse>;
}
export { Sprinklers };
