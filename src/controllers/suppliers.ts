import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { db } from "../../mongodb";

export const getSuppliers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const suppliersArray = await db
    .collection("suppliers")
    .find({})
    .toArray();
  res.send(suppliersArray);
};

export const getSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const suppliersArray = await db
    .collection("suppliers")
    .find({ _id: new ObjectId(id) })
    .toArray();
  res.send(suppliersArray);
};

export const addSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { ops } = await db.collection("suppliers").insertOne(req.body);
    res.send(ops[0]);
  } catch (e) {
    res.send(e);
  }
};

export const editSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await db.collection("suppliers").updateOne(
      { _id: new ObjectId(req.params.id) },
      {
        $set: { type: req.body.type }
      }
    );
    res.send("done");
  } catch (e) {
    res.send(e);
  }
};

export const deleteSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    await db.collection("suppliers").deleteOne({ _id: new ObjectId(id) });
  } catch (e) {}
  res.end();
};
