import { CollectionResponse, ElementResponse, IElement, IResourceUpdate, Resource, Service } from "@rsi/core";
import { BehaviorSubject, Subject } from "rxjs";
import { sprinklerObject } from "./schema";

interface ISprinklerElement extends IElement {
  data: sprinklerObject;
}

class Sprinklers extends Resource {
  private sprinklers: Array<BehaviorSubject<ISprinklerElement>> = [];

  constructor(protected service: Service) {
    super(service);
  }

  get elementSubscribable(): boolean {
    return true;
  }

  public async getElement(elementId: string): Promise<ElementResponse> {
    // find the element requested by the client

    // tslint:disable-next-line:max-line-length
    const data: BehaviorSubject<ISprinklerElement> = this.sprinklers.find((element: BehaviorSubject<ISprinklerElement>) => {
      return (element.getValue().data as { id: string }).id === elementId;
    });
    return {
      data,
      status: "ok"
    };
  }

  public async getResource(offset?: string | number, limit?: string | number): Promise<CollectionResponse> {
    // retriev all element
    let data: Array<BehaviorSubject<ISprinklerElement>>;

    if ((typeof offset === "number" && typeof limit === "number")
        || (typeof limit === "number" && !offset)
        || (typeof offset === "number" && !limit) || (!offset && !limit)) {
      data = this.sprinklers.slice(offset as number, limit as number);
    }

    return { data, status: "ok"};
  }

}

export { Sprinklers };
