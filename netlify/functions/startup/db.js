import { connect } from "mongoose";
import { get } from "config";

const db = get("db");

// const URI = config.get("URI");
// const database = config.get("database");
// const options = {
// 	dbName: database,
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// };

export default function () {
  try {
    connect(db);
    console.log("connected to db");
  } catch (error) {
    console.log("fail to connect to db");
  }

  // const collection = mongoose.db("movly").collection("genres");
  // // perform actions on the collection object
  // mongoose.close();
}
