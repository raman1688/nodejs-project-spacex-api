const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const mongoConnect = async () => {
  await mongoose.connect(MONGO_URL);
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

mongoose.connection.once("open", () => {
  console.log("MongoDb connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
