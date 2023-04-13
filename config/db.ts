import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1:27017/emailing";

export const dbConfig = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`DataBase connected to: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};
