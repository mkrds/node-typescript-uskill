import { Request, Response, NextFunction } from "express";
import { db } from "../../mongodb";

export const getSuppliers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const suppliersArray = await db
    .collection("suppliers")
    .find({})
    .toArray();
  console.log(suppliersArray);
  res.send(suppliersArray);
};

export const getSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params["id"];
  const suppliersArray = await db
    .collection("suppliers")
    .find({ _id: id })
    .toArray();

  res.send(suppliersArray);
};

export const addSupplier = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestBody = req.body;
};

export const editSupplier = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params["id"];
  const requestBody = req.body;
};

export const deleteSupplier = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params["id"];
  try {
    await db.collection("suppliers").remove({ _id: id });
  } catch (e) {}
  res.end();
};
