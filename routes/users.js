import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/signin", signin);//http://localhost:5000/user/signin
router.post("/signup", signup);//http://localhost:5000/user/signup
export default router;