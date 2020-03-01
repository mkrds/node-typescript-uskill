import express from "express";

import {
  getSuppliers,
  getSupplier,
  addSupplier,
  editSupplier,
  deleteSupplier
} from "../controllers/suppliers";

const router = express.Router();

router.get("/suppliers", getSuppliers);
router.get("/suppliers/:id", getSupplier);
router.post("/suppliers", addSupplier);
router.put("/suppliers/:id", editSupplier);
router.delete("/suppliers/:id", deleteSupplier);

export default router;
