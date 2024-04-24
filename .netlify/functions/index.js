import express from "express";
import serverless from "serverless-http";
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
export const handler = serverless(api);
