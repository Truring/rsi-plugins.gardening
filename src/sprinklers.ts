import { CollectionResponse, ElementResponse, IElement, IResourceUpdate, Resource, Service } from "@rsi/core";
import { BehaviorSubject, Subject } from "rxjs";
import { sprinklerObject } from "./schema";

interface ISprinklerElement extends IElement {
  data: sprinklerObject;
}

class Sprinklers extends Resource {

  constructor(protected service: Service) {
    super(service);
    /**
     * build the actual media collection and add it to the collections
     */
    const newElemen = new BehaviorSubject<ISprinklerElement>({
      data: {
        id: "3d6209d1-d720-4f1b-930a-b3ca5e7916d3",
        name: "backyard",
        state: "off",
        uri: "/" + this.service.name + "/" + this.name + "/3d6209d1-d720-4f1b-930a-b3ca5e7916d3"
      } as sprinklerObject,
      lastUpdate: Date.now(),
      propertiesChanged: []
    });
    this.addElement(newElemen);
  }

  get elementSubscribable(): boolean {
    return true;
  }

}

export { Sprinklers };
