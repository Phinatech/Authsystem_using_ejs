import mongoose from "mongoose";

interface Iuser {
  userName: string;
  email: string;
  password: string;
  token: string;
  verified: boolean;
  OPT: string;
  RCnumber: string;
  staffID: string;
}

interface IuserData extends Iuser, mongoose.Document {}

const userSchema = new mongoose.Schema<Iuser>(
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
    token: {
      type: String,
    },
    verified: {
      type: Boolean,
    },
    OPT: {
      type: String,
    },
    RCnumber: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IuserData>("users", userSchema);
