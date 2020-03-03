import express from "express";

import {
  getSuppliers,
  getSupplier,
  addSupplier,
  editSupplier,
  deleteSupplier
} from "../controllers/suppliers";

const router = express.Router();

router.get("/", getSuppliers);
router.get("/:id", getSupplier);
router.post("/", addSupplier);
router.put("/:id", editSupplier);
router.delete("/:id", deleteSupplier);

export default router;
