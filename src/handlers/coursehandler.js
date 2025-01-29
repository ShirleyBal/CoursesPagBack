import Course from '../models/courses.js';

export const createCourse = async ({ title, description, category, type, date, hour, link, front_page, price, quota }) => {
  // Validaciones de negocio antes de crear el curso
  if (type === 'live' && !quota) {
    throw new Error('Live courses must have a quota.');
  }

  if (!title || !description || !category || !type || !date || !hour) {
    throw new Error('All course fields are required.');
  }

  // Crea el nuevo curso en la base de datos
  const newCourse = await Course.create({
    title,
    description,
    category,
    type,
    date,
    hour,
    link,
    front_page,
    price,
    quota: type === 'live' ? quota : null, // Solo los cursos en vivo tienen cuota
  });

  return newCourse;
};

export const getCourses = async () => {
  // Recupera todos los cursos de la base de datos
  const courses = await Course.findAll();
  return courses;
};

export const updateCourse = async (course_id, { title, description, category, type, date, hour, link, front_page, price, quota }) => {
  // Verifica si el curso existe
  const course = await Course.findOne({ where: { course_id } });
  if (!course) {
    throw new Error('Course not found.');
  }

  // Actualiza los campos del curso
  await course.update({
    title,
    description,
    category,
    type,
    date,
    hour,
    link,
    front_page,
    price,
    quota: type === 'live' ? quota : null, // Solo los cursos en vivo tienen cuota
  });

  return course;
};

export const deleteCourse = async (course_id) => {
  // Verifica si el curso existe
  const course = await Course.findOne({ where: { course_id } });
  if (!course) {
    throw new Error('Course not found.');
  }

  // Elimina el curso
  await course.destroy();
};
