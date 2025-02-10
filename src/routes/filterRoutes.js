import { Router } from "express";
import getFilteredCourses from '../controllers/filtercontroller.js';

const router = Router();

// ✅ GET /api/courses/filter -> Aplica filtros dinámicos
router.get("/", getFilteredCourses);

export default router;

