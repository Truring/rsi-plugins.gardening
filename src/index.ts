import { Service } from "@rsi/core/dist/rsiPlugin";
import { Gardening } from "./gardening";

export const getPlugins = (): Array<new () => Service> => {
  return [Gardening];
}