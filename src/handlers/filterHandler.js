import { Op } from 'sequelize';
import Course from '../models/courses.js';


export const filterCourses = async (query) => {
  try {
    const { search, type, category, minPrice, maxPrice } = query;

    let filters = {};

    if (search) {
      filters.title = { [Op.iLike]: `%${search}%` };
    }

    if (type) {
      filters.type = { [Op.iLike]: type }; 
    }

    if (category) {
      filters.category = { [Op.eq]: category };
    }

    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) {
        filters.price[Op.gte] = Number(minPrice); 
      }
      if (maxPrice) {
        filters.price[Op.lte] = Number(maxPrice); 
      }
    }

    const courses = await Course.findAll({ where: filters });

    return courses;
  } catch (error) {
    console.error("Error filtering courses:", error);
    throw new Error("Database error");
  }
};
