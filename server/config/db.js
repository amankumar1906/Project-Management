const mongoose = require("mongoose");
const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://amank19:%40pplicatioN007@cluster0.tkpfvx1.mongodb.net/mgmt_db?retryWrites=true&w=majority"
  );

  console.log(`Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
