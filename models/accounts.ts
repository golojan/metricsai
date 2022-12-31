import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;
import { AccountTypes, Gender } from "../interfaces/enums";

const accountsScheme = new mongoose.Schema(
  {
    schoolid: {
      type: Schema.Types.ObjectId,
      ref: "schools",
    },
    accountType: {
      type: String,
      enum: Object.values(AccountTypes),
      required: true,
    },
    picture: {
      type: String,
      default: "/images/avatar/user.png",
    },
    firstname: { type: String },
    middlename: { type: String },
    lastname: { type: String },
    email: {
      type: String,
      unique: true,
    },
    mobile: { type: String },
    gender: {
      type: String,
      enum: Object.values(Gender),
    },
    otp: {
      enabled: { type: Boolean, default: true },
      code: String,
    },
    passwordKey: { type: String },
    password: { type: String },
    enabled: {
      type: Boolean,
      default: false,
    },
    smsNotification: { type: Number, default: 0 },
    emailNotification: { type: Number, default: 0 },
    schoolCode: { type: String },
    googleScholarId: { type: String },
    scopusId: { type: String },
    orcidId: { type: String },
  },
  { timestamps: true }
);

delete mongoose.models.Accounts;
const Accounts =
  mongoose.models.Accounts || mongoose.model("Accounts", accountsScheme);
export default Accounts;
