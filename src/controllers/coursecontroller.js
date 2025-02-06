import { createCourse, getCourses, updateCourse, deleteCourse } from '../handlers/coursehandler.js';

export const createCourseController = async (req, res) => {
  try {
    const { title, description, category, type, date, hour, link, front_page, price, quota } = req.body;
    const newCourse = await createCourse({ title, description, category, type, date, hour, link, front_page, price, quota });
    
    res.status(201).json({
      message: 'Course created successfully',
      course: newCourse,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const getCoursesController = async (req, res) => {
  try {
    const courses = await getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateCourseController = async (req, res) => {
  try {
    const { course_id } = req.params;
    const { title, description, category, type, date, hour, link, front_page, price, quota } = req.body;
    const updatedCourse = await updateCourse(course_id, { title, description, category, type, date, hour, link, front_page, price, quota });
    
    res.status(200).json({
      message: 'Course updated successfully',
      course: updatedCourse,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteCourseController = async (req, res) => {
  try {
    const { course_id } = req.params;
    await deleteCourse(course_id);
    
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
