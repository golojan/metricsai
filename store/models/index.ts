import { Models } from "@rematch/core";
import { accounts } from "./accounts";

export interface RootModel extends Models<RootModel> {
  accounts: typeof accounts;
}

export const models: RootModel = {
  accounts,
};
