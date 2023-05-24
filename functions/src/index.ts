const functions = require("firebase-functions");
// const express = require("express");
// const app = express();
//
// exports.app = functions.https.onRequest(app);
const express = require("express");
import routes from "./routes/index";
import { connectDb } from "./db/index";
import { allowCrossDomain } from "./middleware/authentications";
const bodyParser = require("body-parser");
const cors = require("cors");

const server = express();
server.use(cors());
server.options("*", cors());
server.use(allowCrossDomain);
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(routes);

server.get("/some-data", (request: any, response: any) => {
  response.send("Hello world");
});
const PORT = 3001;

connectDb().then(async () => {
  server.listen(PORT, () =>
    console.log(`Listening on http://localhost:${PORT}`)
  );
});

exports.server = functions.https.onRequest(server);
