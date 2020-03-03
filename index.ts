import express from "express";
import cors from "cors";
import bodyparser from "body-parser";

import { connectToDB } from "./mongodb";
import suppliersRoutes from "./src/routes/suppliers";
import config from "./config";

const app = express();

app.use(cors());
app.use(bodyparser());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/suppliers", suppliersRoutes);

connectToDB().then(() => {
  app.listen(config.app.port, () => {
    console.log(`Example app listening on port ${config.app.port}!`);
  });
});
