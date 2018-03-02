import { Service } from "@rsi/core";
import { Gardening } from "./gardening";
export { Gardening };

export const getPlugins = (): Array<new () => Service> => {
  return [Gardening];
};
