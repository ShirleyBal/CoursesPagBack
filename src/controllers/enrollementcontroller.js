import { createEnrollment, getEnrollments, updateEnrollment, deleteEnrollment } from '../handlers/enrollmentHandler.js';

export const createEnrollmentController = async (req, res) => {
  try {
    const { course_id, user_id } = req.body;
    const newEnrollment = await createEnrollment(course_id, user_id);

    res.status(201).json({
      message: 'Enrollment created successfully',
      enrollment: newEnrollment,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getEnrollmentsController = async (req, res) => {
  try {
    const enrollments = await getEnrollments();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateEnrollmentController = async (req, res) => {
  try {
    const { enrollment_id } = req.params;
    const { state } = req.body;
    const updatedEnrollment = await updateEnrollment(enrollment_id, state);

    res.status(200).json({
      message: 'Enrollment updated successfully',
      enrollment: updatedEnrollment,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteEnrollmentController = async (req, res) => {
  try {
    const { enrollment_id } = req.params;
    await deleteEnrollment(enrollment_id);

    res.status(200).json({ message: 'Enrollment deleted successfully' });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
