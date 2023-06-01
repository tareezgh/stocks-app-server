import { Router } from "express";

import { AuthController } from "../controllers/authController";

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/getStocks", AuthController.getStocks);
router.patch("/updateStocks", AuthController.updateStocks);

export default router;
