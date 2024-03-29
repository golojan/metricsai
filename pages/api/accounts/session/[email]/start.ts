import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "../../../../../models";
import { ResponseFunctions } from "../../../../../interfaces/index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) =>
    res.status(400).json({ status: false, error: error });
  const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { email } = req.query;
      const { Accounts } = await dbCon();
      const account = await Accounts.findOne({ email: email }).catch(catcher);
      if (account) {
        //Return Acclount//
        console.log(account);
        return;
      } else {
        //Setup Fresh Account//
        res.status(400).json({ status: false, error: "Account not found" });
        return;
        console.log("account not found");
      }
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else
    res
      .status(400)
      .json({ status: false, error: "No Response for This Request" });
}
