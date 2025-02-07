import Comment from '../models/Comment.js';
import Enrollment from '../models/Enrollment.js';

export const createComment = async (user_id, course_id, comment, punctuation) => {
  // Verify that the user has purchased the course and is approved
  const enrollment = await Enrollment.findOne({
    where: {
      course_id,
      user_id,
      state: 'approved', // User must be approved
    },
  });

  if (!enrollment) {
    throw new Error('You must have purchased the course to comment.');
  }

  // Check that the user has not already commented on the course
  const existingComment = await Comment.findOne({
    where: {
      course_id,
      user_id,
    },
  });

  if (existingComment) {
    throw new Error('You can only comment once per course.');
  }

  // Create the comment if the validations are correct
  const newComment = await Comment.create({
    user_id,
    course_id,
    comment,
    punctuation,
  });

  return newComment;
};
