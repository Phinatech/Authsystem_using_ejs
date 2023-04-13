import mongoose from "mongoose";

interface Iuser {
  userName: string;
  email: string;
  password: string;
  token: string;
  verified: boolean;
  OPT: string;
  RCnumber: string;
  UserNumber: string;
}

interface IcompanyData extends Iuser, mongoose.Document {}

const userSchema = new mongoose.Schema<Iuser>({
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
});

export default mongoose.model<IcompanyData>("user", userSchema);
