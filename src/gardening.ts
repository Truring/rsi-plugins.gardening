import { BehaviorSubject, Subject } from 'rxjs';
import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs";
import { rsiLogger } from "@rsi/core";

import { Service, Resource, Element, ResourceUpdate, StatusCode, ElementResponse, CollectionResponse } from "@rsi/core";
import { sprinklerObject } from "./schema";

class Gardening extends Service {
  constructor() {
    super();
    this.id = "12A0A7A2-C165-41B5-8F78-499F906C3BDB"; //random id
    this._resources.push(new Sprinklers(this));
  }
}

interface SprinklerElement extends Element {
  data: sprinklerObject;
}

class Sprinklers extends Resource {
  private _sprinklers: BehaviorSubject<SprinklerElement>[] = [];

  constructor(private service: Service) {
    super();
    this._change = new BehaviorSubject(<ResourceUpdate>{ lastUpdate: Date.now(), action: 'init' });
  }

  get elementSubscribable(): Boolean {
    return true;
  };

  async getElement(elementId: string): Promise<ElementResponse> {
    // find the element requested by the client
    return {
      status: "ok",
      data: this._sprinklers.find((element: BehaviorSubject<SprinklerElement>) => {
        return (<{ id: string }>element.getValue().data).id === elementId;
      })
    };
  };

  async getResource(offset?: string | number, limit?: string | number): Promise <CollectionResponse> {
    // retriev all element
    let resp: BehaviorSubject<SprinklerElement>[];

    if ((typeof offset === "number" && typeof limit === "number") || (typeof limit === "number" && !offset) || (typeof offset === "number" && !limit) || (!offset && !limit)) {
      resp = this._sprinklers.slice(<number>offset, <number>limit);
    }

    return { status: "ok", data: resp };
  };

  setElement() {

  };
}


export { Gardening };

