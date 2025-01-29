import Comment from '../models/Comment.js';
import Enrollment from '../models/Enrollment.js';

export const createComment = async (user_id, course_id, comment, punctuation) => {
  // Verifica que el usuario haya comprado el curso y esté aprobado
  const enrollment = await Enrollment.findOne({
    where: {
      course_id,
      user_id,
      state: 'approved', // El usuario debe estar aprobado
    },
  });

  if (!enrollment) {
    throw new Error('You must have purchased the course to comment.');
  }

  // Verifica que el usuario no haya comentado ya el curso
  const existingComment = await Comment.findOne({
    where: {
      course_id,
      user_id,
    },
  });

  if (existingComment) {
    throw new Error('You can only comment once per course.');
  }

  // Crea el comentario si las validaciones son correctas
  const newComment = await Comment.create({
    user_id,
    course_id,
    comment,
    punctuation,
  });

  return newComment;
};
