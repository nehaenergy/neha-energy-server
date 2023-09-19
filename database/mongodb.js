const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let isConnected = false;

module.exports = {
  connect: async () => {
    if (isConnected) {
      console.log("Using existing MongoDB connection");
      return;
    }

    try {
      await mongoose.connect(
        process.env.DATABASE,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      isConnected = true;
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  },
};
