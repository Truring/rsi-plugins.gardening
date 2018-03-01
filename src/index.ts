import { Service } from "@rsi/core";
import { Gardening } from "./gardening";

export const getPlugins = (): Array<new () => Service> => {
  return [Gardening];
};
