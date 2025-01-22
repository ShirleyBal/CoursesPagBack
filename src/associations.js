import Course from './models/courses.js';
import User from './models/users.js';
import Comment from './models/comment.js';
import Enrollment from './models/enrollment.js';

export function setupAssociations() {
  // Relación de muchos a uno entre comentarios y cursos
  Course.hasMany(Comment, { foreignKey: 'curso_id' });
  Comment.belongsTo(Course, { foreignKey: 'curso_id' });

  // Relación de muchos a uno entre comentarios y usuarios
  User.hasMany(Comment, { foreignKey: 'usuario_id' });
  Comment.belongsTo(User, { foreignKey: 'usuario_id' });

  // Relación de muchos a uno entre inscripciones y usuarios
  User.hasMany(Enrollment, { foreignKey: 'alumno_id' });
  Enrollment.belongsTo(User, { foreignKey: 'alumno_id' });

  // Relación de muchos a uno entre inscripciones y cursos
  Course.hasMany(Enrollment, { foreignKey: 'curso_id' });
  Enrollment.belongsTo(Course, { foreignKey: 'curso_id' });
}
