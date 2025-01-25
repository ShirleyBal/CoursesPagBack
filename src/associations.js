import User from './models/users.js';         // Make sure User is imported first
import Enrollment from './models/enrollment.js';  // Then import Enrollment
import Course from './models/courses.js';         // Import all other models as well

// Now define associations here
export function setupAssociations() {
  User.hasMany(Enrollment, { foreignKey: 'user_id' });
  Course.hasMany(Enrollment, { foreignKey: 'course_id' });
  Enrollment.belongsTo(User, { foreignKey: 'user_id' });
  Enrollment.belongsTo(Course, { foreignKey: 'course_id' });
}
