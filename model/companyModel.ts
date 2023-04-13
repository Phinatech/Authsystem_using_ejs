import mongoose from "mongoose";

interface iUser {
  userNmae: string;
  email: string;
  password: string;
  token: string;
  verified: boolean;
  OTP: string;
  RCNumber: string;
  staffID: string;
}

interface icompanyData extends iUser, mongoose.Document {}

const companyModel = new mongoose.Schema(
  {
    userName: {
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
  },
  { timestamps: true }
);

export default mongoose.model<icompanyData>("companies", companyModel);
