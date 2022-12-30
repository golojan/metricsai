import { NextApiRequest, NextApiResponse } from "next";
import { dbCon } from "../../../models";
import { ResponseFunctions } from "../../../interfaces";

const bcrypt = require("bcryptjs");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) =>
    res.status(400).json({ status: 0, error: error });
  const handleCase: ResponseFunctions = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { accountType, firstname, lastname, email, gender, password } =
        req.body;
      const { Accounts } = await dbCon();

      // Encrypt Password//
      const salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(password, salt);
      // Encrypt Password//

      const created = await Accounts.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        accountType: accountType,
        gender: gender,
        passwordKey: password,
        password: hashedPassword,
      }).catch(catcher);

      console.log(created);

      // if (!created) {
      //   res.status(404).json({ status: 0, err: "Error creating account" });
      // } else {
      //   res.status(200).json({ status: 1, id: created._id });
      // }
    },
  };

  const response = handleCase[method];
  if (response) response(req, res);
  else
    res.status(400).json({ status: 0, error: "No Response for This Request" });
}
