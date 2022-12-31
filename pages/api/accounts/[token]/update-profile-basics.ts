import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "../../../../models";
import { ResponseFunctions } from "../../../../interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) =>
    res.status(400).json({ status: 0, error: error });
  const handleCase: ResponseFunctions = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { token } = req.query;
      const { accountType, firstname, lastname, gender, birthday } = req.body;

      const { Accounts } = await dbCon();

      const saved = await Accounts.updateOne(
        { _id: token },
        {
          accountType: accountType,
          firstname: firstname,
          lastname: lastname,
          gender: gender,
          birthday: birthday,
        }
      ).catch(catcher);

      if (saved) {
        res.status(200).json({
          status: true,
          data: saved,
        });
      } else {
        res.status(400).json({ status: false, error: "Account not found" });
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
