import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import db from "./startup/db";
import validation from "./startup/validation";
import routes from "./startup/routes";

const api = express();

api.use(cors());
api.use(db());
api.use(validation());
api.use(routes(api));

// require("./startup/db").default();
// require("./startup/config").default();
// require("./startup/validation").default();
// require("./startup/routes").default(api);

// const server = serverless(api);

// import { get } from "config";
// const port = process.env.PORT || get("port");
// const server = api.listen(port, () => console.log(`Listening on port ${port}...`));

// export default server;
export const handler = serverless(api);
