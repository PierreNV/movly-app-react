const { MongoClient } = require("mongodb");

module.exports = function () {
  const mongoClient = new MongoClient(process.env.DB);

  try {
    mongoClient.connect();
    console.log("connected to db");
  } catch (error) {
    console.log("fail to connect to db");
  }
};
