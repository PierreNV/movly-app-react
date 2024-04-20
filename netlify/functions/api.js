import express from "express";
import serverless from "serverless-http";

const api = express();

// import cors from "cors";
// api.use(cors());

// import cors from "cors";
// api.use(cors());
require("./startup/db").default();
require("./startup/config").default();
require("./startup/validation").default();
require("./startup/routes").default(api);

// const server = serverless(api);

// import { get } from "config";
// const port = process.env.PORT || get("port");
// const server = api.listen(port, () => console.log(`Listening on port ${port}...`));

// export default server;
export const handler = serverless(api);
