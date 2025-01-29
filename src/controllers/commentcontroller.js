import { createComment } from '../handlers/commenthandler.js';

export const createCommentController = async (req, res) => {
  try {
    const { course_id, comment, punctuation } = req.body;
    const user_id = req.user.id; // Asumiendo que tienes autenticación para obtener el id del usuario

    const newComment = await createComment(user_id, course_id, comment, punctuation);
    
    res.status(201).json({
      message: 'Comment created successfully',
      comment: newComment,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
