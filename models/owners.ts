import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;

const ownerSchema = new mongoose.Schema(
  {
    role: {
      type: Schema.Types.ObjectId,
      ref: "toles",
      required: true,
    },
    email: { type: String, unique: true },
    mobile: { type: String, unique: true },
    firstname: { type: String },
    lastname: { type: String },
    middlename: { type: String },
    password: { type: String },
    hasOtp: { type: Boolean, default: false },
    otp: { type: String },
    otpExpires: { type: Number, default: 5 },
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

delete mongoose.models.Owners;
const Owners = mongoose.models.Owners || mongoose.model("Owners", ownerSchema);
export default Owners;
