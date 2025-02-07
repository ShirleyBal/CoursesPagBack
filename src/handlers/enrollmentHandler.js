import Enrollment from '../models/Enrollment.js';
import Course from '../models/Course.js';

export const createEnrollment = async (course_id, user_id) => {
  // Check if the course exists
  const course = await Course.findOne({ where: { course_id } });
  if (!course) {
    throw new Error('Course not found.');
  }

  // If the course is live, check the availability of places
  if (course.type === 'live') {
    const enrolledCount = await Enrollment.count({ where: { course_id } });
    if (enrolledCount >= course.quota) {
      throw new Error('No more spots available for this live course.');
    }
  }

  // Create a new registration
  const enrollment = await Enrollment.create({
    course_id,
    user_id,
    state: 'pending', // The default status is 'pending'
  });

  return enrollment;
};

export const getEnrollments = async () => {
  // Retrieves all entries from the database
  const enrollments = await Enrollment.findAll();
  return enrollments;
};

export const updateEnrollment = async (enrollment_id, state) => {
  // Check if the registration exists
  const enrollment = await Enrollment.findOne({ where: { inscription_id: enrollment_id } });
  if (!enrollment) {
    throw new Error('Enrollment not found.');
  }

  // Update registration status
  await enrollment.update({
    state, // Puede ser 'approved', 'rejected', etc.
  });

  return enrollment;
};

export const deleteEnrollment = async (enrollment_id) => {
  // Check if the registration exists
  const enrollment = await Enrollment.findOne({ where: { inscription_id: enrollment_id } });
  if (!enrollment) {
    throw new Error('Enrollment not found.');
  }

  await enrollment.destroy();
};
