import express from "express";
import cors from "cors";
import bodyparser from "body-parser";

import { connectToDB } from "./mongodb";
import suppliersRoutes from "./src/routes/suppliers";
import config from "./config";
import auth from "./src/middleware/auth";
import permit from "./src/middleware/permit";

const app = express();

app.use(cors());
app.use(bodyparser());
app.use(auth);

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/suppliers", permit("manager"), suppliersRoutes);

connectToDB().then(() => {
  app.listen(config.app.port, () => {
    console.log(`Example app listening on port ${config.app.port}!`);
  });
});
