import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hey user");
});

app.listen(2000, () => {
  console.log("Listening on port 2000!");
});
