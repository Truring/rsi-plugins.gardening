import { Service } from "@rsi/core";
import * as fs from "fs";
import * as path from "path";
import * as uuid from "uuid";
import { sprinklerObject } from "./schema";
import { Sprinklers } from "./sprinklers";

class Gardening extends Service {
  protected constructor() {
    super();
    this.id = "12a0a7a2-c165-41b5-8f78-499f906c3bdb"; // random id
    this.addResource(new Sprinklers(this));
  }
}

export { Gardening };
