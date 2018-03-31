import { XObject } from "@rsi/core";

/* this interface was auto generated from schema.json*/
export interface sprinklerObject extends XObject {
  uri: string;
  state?: "on" | "off";
}