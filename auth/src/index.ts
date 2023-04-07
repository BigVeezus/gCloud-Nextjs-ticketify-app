// Packages
import express from "express";
import { json } from "body-parser";

// Routes
import { currentUserRouter } from "./routes/current-user";
import { signoutRouter } from "./routes/signout";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(signinRouter);

app.use(errorHandler);

app.listen(2000, () => {
  console.log("Listening on port 2000!");
});
