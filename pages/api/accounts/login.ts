import { NextApiRequest, NextApiResponse } from "next";
import { ResponseFunctions } from "../../../interfaces";
import { dbCon } from "../../../models";
import mongoose from "mongoose";
import { AccountTypes } from "../../../interfaces/enums";

const bcrypt = require("bcryptjs");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
  const catcher = (error: Error) => res.status(400).json({ error });
  const handleCase: ResponseFunctions = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { username, password, accountType } = req.body;
      const { Accounts, Schools } = await dbCon();
      await Accounts.findOne({
        email: username,
      })
        .then((account) => {
          if (account) {
            const isPasswordValid = bcrypt.compareSync(
              password,
              account.password
            );
            if (isPasswordValid) {
              //Password is valid//
              if (accountType === AccountTypes.GUEST) {
                // Handle Guest Login
                res.status(200).json({
                  status: true,
                  token: account._id,
                });
                return;
              }

              if (accountType === AccountTypes.STUDENT) {
                // Handle Student Login
                res.status(200).json({
                  status: true,
                  token: account._id,
                });
                return;
              }

              if (accountType === AccountTypes.LECTURER) {
                // Handle Teacher Login
                res.status(200).json({
                  status: true,
                  token: account._id,
                });
                return;
              }
            } else {
              res
                .status(400)
                .json({ status: false, error: "Invalid Login detailes" });
                return;
            }
          } else {
            res
              .status(400)
              .json({ status: false, error: "Invalid Login detailes" });
              return;
          }
        })
        .catch(catcher);
    },
  };
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
}
