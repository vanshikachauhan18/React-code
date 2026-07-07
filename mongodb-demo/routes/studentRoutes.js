import express from 'express';
import { addStudent } from "../controllers/studentControllers.js";

const router = express.Router();

router.post("/", addStudent);

export default router;