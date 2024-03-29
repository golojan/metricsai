import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const connectionScheme = new mongoose.Schema(
  {
    fromUser: { type: String },
    toUser: { type: String },
    accepted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

delete mongoose.models.Connections;
const Connections =
  mongoose.models.Connections ||
  mongoose.model("Connections", connectionScheme);
export default Connections;
