import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;
import { AccountTypes, Gender } from "../interfaces/enums";

const accountsScheme = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    schoolId: {
      type: Schema.Types.ObjectId,
      ref: "schools",
    },
    departmentId: {
      type: String,
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
    aboutMe: { type: String, default: "" },
    email: {
      type: String,
      unique: true,
    },
    mobile: { type: String },
    gender: {
      type: String,
      enum: Object.values(Gender),
    },
    birthday: { type: String },
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
    smsNotification: { type: Boolean, default: false },
    emailNotification: { type: Boolean, default: false },
    schoolCode: { type: String },
    googleScholarId: { type: String },
    scopusId: { type: String },
    orcidId: { type: String },
  },
  { timestamps: true }
);

// delete mongoose.models.Accounts;
const Accounts =
  mongoose.models.Accounts || mongoose.model("Accounts", accountsScheme);
export default Accounts;
