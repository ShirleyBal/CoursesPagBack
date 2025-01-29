import express from 'express';
import { createCommentController } from '../controllers/commentcontroller.js';

const router = express.Router();

router.post('/comments', createCommentController);

export default router;
