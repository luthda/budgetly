import { Router, Request, Response } from "express";
import { signup, login } from "../../controllers/auth/authController";

const router = Router();

router.post("/signup", signup as (req: Request, res: Response) => Promise<string | any>);
router.post("/login", login as (req: Request, res: Response) => Promise<string | any>);

export default router;
