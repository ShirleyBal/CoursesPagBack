import Student from './models/students.js';
import Enrollment from './models/enrollment.js';
import Course from './models/courses.js';

export function setupAssociations() {
  Student.hasMany(Enrollment, { foreignKey: 'studentId' });
  Enrollment.belongsTo(Student, { foreignKey: 'studentId' });

  Course.hasMany(Enrollment, { foreignKey: 'courseId' });
  Enrollment.belongsTo(Course, { foreignKey: 'courseId' });
}
