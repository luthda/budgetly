import { Router, Request, Response } from "express";
import { signup } from "../../controllers/auth/authController";

const router = Router();

router.post("/signup", signup as (req: Request, res: Response) => Promise<string | any>);

export default router;
