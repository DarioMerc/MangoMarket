import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.magenta.bold);
  } catch (error) {
    console.log(`ERROR: ${error.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDB;
