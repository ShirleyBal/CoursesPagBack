import Course from '../models/courses.js';

export const createCourse = async ({ title, description, category, type, date, hour, link, front_page, price, quota }) => {
  // Business validations before creating the course
  if (type === 'live' && !quota) {
    throw new Error('Live courses must have a quota.');
  }

  if (!title || !description || !category || !type || !date || !hour) {
    throw new Error('All course fields are required.');
  }

  // Create the new course in the database
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
    quota: type === 'live' ? quota : null, // Only live courses have a fee
  });

  return newCourse;
};

export const getCourses = async () => {
  // Retrieve all courses from the database
  const courses = await Course.findAll();
  return courses;
};

export const updateCourse = async (course_id, { title, description, category, type, date, hour, link, front_page, price, quota }) => {
  // Check if the course exists
  const course = await Course.findOne({ where: { course_id } });
  if (!course) {
    throw new Error('Course not found.');
  }

  // Update course fields
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
    quota: type === 'live' ? quota : null, // Only live courses have a fee
  });

  return course;
};

export const deleteCourse = async (course_id) => {
  // Check if the course exists
  const course = await Course.findOne({ where: { course_id } });
  if (!course) {
    throw new Error('Course not found.');
  }

  // Delete the course
  await course.destroy();
};
