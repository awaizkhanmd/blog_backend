import { Router } from "express";
import CreateUser from "./Controllers/userController.js";
const router = Router();


router.post("/createUser", CreateUser )

export default router;