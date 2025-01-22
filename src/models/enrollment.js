import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';
import User from './users.js';
import Course from './courses.js';

class Enrollment extends Model {}

Enrollment.init(
  {
    inscripcion_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['pendiente', 'aprobado', 'rechazado']], // Validación para estado
      },
    },
  },
  {
    sequelize,
    modelName: 'Enrollment',
    tableName: 'enrollments',
    timestamps: false,
  }
);

// Relación con las tablas de usuarios y cursos
User.hasMany(Enrollment, { foreignKey: 'alumno_id' });
Course.hasMany(Enrollment, { foreignKey: 'curso_id' });
Enrollment.belongsTo(User, { foreignKey: 'alumno_id' });
Enrollment.belongsTo(Course, { foreignKey: 'curso_id' });

export default Enrollment;
