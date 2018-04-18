import { Service } from "@rsi/core";
import { Gardening } from "./gardening";
export { Gardening };

export const getPlugins = (): Array<typeof Service> => {
  return [Gardening];
};
