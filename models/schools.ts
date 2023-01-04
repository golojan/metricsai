import mongoose, { Schema } from "mongoose";

mongoose.Promise = global.Promise;
import { StateTypes, OwnerTypes } from "../interfaces/enums";

const schoolsScheme = new mongoose.Schema(
  {
    logo: {
      type: String,
      default: "/assets/img/logo-icon.png",
    },

    domain: { type: String },
    name: { type: String },
    shortname: { type: String, unique: true },
    state: { type: String },
    location: String,
    ownedBy: { type: String },
    founded: Number,

    ranking: {
      googlePresence: { type: Number, default: 0 },
      citations: { type: Number, default: 0 },
      hindex: { type: Number, default: 0 },
      i10hindex: { type: Number, default: 0 },
    },
    history: [
      {
        name: String,
        lecturers: [],
        students: [],
        googlePresence: { type: Number, default: 0 },
        citations: { type: Number, default: 0 },
        hindex: { type: Number, default: 0 },
        i10hindex: { type: Number, default: 0 },
        allschools: [],
        adminId: String,
      },
      { timestamps: true },
    ],
    indicators: [
      {
        type: String,
      },
    ],
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// delete mongoose.models.Schools;
const Schools =
  mongoose.models.Schools || mongoose.model("Schools", schoolsScheme);
export default Schools;
