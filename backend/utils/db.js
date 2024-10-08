import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    // console.log("process.env.MONGODB_URI:",process.env.MONGODB_URI);
    // console.log("DB_NAME:",DB_NAME);
  } catch (error) {
    console.log("MONGODB connection Failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
