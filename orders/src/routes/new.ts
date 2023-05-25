import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@ticketifyorg/common";
import { body } from "express-validator";

const router = express.Router();

router.post("/api/orders", async (req: Request, res: Response) => {
  res.send(" new Orders");
});

export { router as newOrderRouter };
