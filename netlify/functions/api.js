import express from "express";

const api = express();

// import cors from "cors";
// api.use(cors());

// import cors from "cors";
// api.use(cors());
require("./startup/db").default();
require("./startup/config")();
require("./startup/validation")();
require("./startup/routes").default(api);

// import { get } from "config";
// const port = process.env.PORT || get("port");
// const server = api.listen(port, () => console.log(`Listening on port ${port}...`));

// export default server;
