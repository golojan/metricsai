import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "../../../../models";
import { ResponseFunctions } from "../../../../interfaces";
import console from "console";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) =>
    res.status(400).json({ status: 0, error: error });
  const handleCase: ResponseFunctions = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { token } = req.query;

      const { smsNotification, emailNotification } = req.body;
      const { Accounts } = await dbCon();

      const saved = await Accounts.updateOne(
        { _id: token },
        {
          smsNotification: smsNotification,
          emailNotification: emailNotification,
        }
      ).catch(catcher);
      if (saved) {
        res.status(200).json({
          status: true,
          data: saved,
        });
        return;
      } else {
        res.status(400).json({ status: false, error: "Account not found" });
        return;
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
