import express from "express";
import cors from "cors";

import { connectToDB } from "./mongodb";
import suppliersRoutes from "./src/routes/suppliers";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/", suppliersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  connectToDB();
});
