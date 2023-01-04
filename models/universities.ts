import mongoose from "mongoose";
mongoose.Promise = global.Promise;

const universitiesScheme = new mongoose.Schema(
  {
    name: { type: String },
    shortname: { type: String },
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

delete mongoose.models.Universities;
const Universities =
  mongoose.models.Universities ||
  mongoose.model("Universities", universitiesScheme);
export default Universities;
