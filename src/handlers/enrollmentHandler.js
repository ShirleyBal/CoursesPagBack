import Enrollment from '../models/Enrollment.js';
import Course from '../models/Course.js';

export const createEnrollment = async (course_id, user_id) => {
  // Verifica si el curso existe
  const course = await Course.findOne({ where: { course_id } });
  if (!course) {
    throw new Error('Course not found.');
  }

  // Si el curso es en vivo, verifica la disponibilidad de los cupos
  if (course.type === 'live') {
    const enrolledCount = await Enrollment.count({ where: { course_id } });
    if (enrolledCount >= course.quota) {
      throw new Error('No more spots available for this live course.');
    }
  }

  // Crea una nueva inscripción
  const enrollment = await Enrollment.create({
    course_id,
    user_id,
    state: 'pending', // El estado por defecto es 'pending'
  });

  return enrollment;
};

export const getEnrollments = async () => {
  // Recupera todas las inscripciones de la base de datos
  const enrollments = await Enrollment.findAll();
  return enrollments;
};

export const updateEnrollment = async (enrollment_id, state) => {
  // Verifica si la inscripción existe
  const enrollment = await Enrollment.findOne({ where: { inscription_id: enrollment_id } });
  if (!enrollment) {
    throw new Error('Enrollment not found.');
  }

  // Actualiza el estado de la inscripción
  await enrollment.update({
    state, // Puede ser 'approved', 'rejected', etc.
  });

  return enrollment;
};

export const deleteEnrollment = async (enrollment_id) => {
  // Verifica si la inscripción existe
  const enrollment = await Enrollment.findOne({ where: { inscription_id: enrollment_id } });
  if (!enrollment) {
    throw new Error('Enrollment not found.');
  }

  // Elimina la inscripción
  await enrollment.destroy();
};
