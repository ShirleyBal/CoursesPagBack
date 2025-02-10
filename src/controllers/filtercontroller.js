import { filterCourses } from '../handlers/filterHandler.js';

const getFilteredCourses = async (req, res) => {
  try {
    console.log("Request received at /api/courses/filter");
    console.log("Query parameters:", req.query);
    const courses = await filterCourses(req.query);

    if (courses.length === 0) {
      return res.status(404).json({ message: "No courses found for the selected filters." });
    }

    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getFilteredCourses;
