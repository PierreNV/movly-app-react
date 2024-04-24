import express from "express";
import { handle } from "express/lib/router";
// import db from "./startup/db";
// import serverless from "serverless-http";
const api = express();

// import cors from "cors";
// api.use(cors());

require("./startup/config")();
require("./startup/db")();
require("./startup/validation")();
require("./startup/routes")(api);

// import { get } from "config";
// const port = process.env.PORT || get("port");
// const server = api.listen(port, () => console.log(`Listening on port ${port}...`));

// export default server;
// export const handler = serverless(api);

const handler = async (event, endpoint) => {
  try {
    const database = await clientPromise.db(process.env.db);
    const results = await database.find({});
    return { statusCode: 200, body: JSON.stringify(results) };
  } catch (error) {}
};

module.export = { handler };
