import mongoose from "mongoose";
import Schools from "./schools";
import Accounts from "./accounts";
import Connections from "./connections";
import Owners from "./owners";

const { MONGOOSE_URI } = process.env;

export const dbCon = async () => {
  const conn = await mongoose
    .connect(MONGOOSE_URI as string)
    .then(() => {})
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");
  return {
    conn,
    Schools,
    Accounts,
    Connections,
    Owners,
  };
};
