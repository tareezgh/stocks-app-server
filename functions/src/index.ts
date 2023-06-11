const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
import routes from "./routes/index";
import { connectDb } from "./db/index";

const app = express();

app.use(cors());
app.use(routes);
app.get("/some-data", (request: any, response: any) => {
  response.send("Hello world");
});

const PORT = 3002;

connectDb().then(async () => {
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
});

exports.app = functions.https.onRequest(app);
