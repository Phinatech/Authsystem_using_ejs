import mongoose from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  token: string;
  verified: boolean;
  OTP: string;
  RCNumber: string;
  staffID: {}[];
}

interface icompanyData extends iUser, mongoose.Document {}

const companyModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    OTP: {
      type: String,
    },
    RCNumber: {
      type: String,
    },
    token: {
      type: String,
    },
    verified: {
      type: String,
    },
    staff: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<icompanyData>("companies", companyModel);
