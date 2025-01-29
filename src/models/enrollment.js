import sequelize from '../database/database.js';
import { DataTypes, Model } from 'sequelize';
import Course from './courses.js';

class Enrollment extends Model {}

Enrollment.init(
  {
    inscription_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: 'course_id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Registration date
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'pending', // Default value
      validate: {
        isIn: [['pending', 'approved', 'rejected']], // Allowed values
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

// Relación
Course.hasMany(Enrollment, { foreignKey: 'course_id' });
Enrollment.belongsTo(Course, { foreignKey: 'course_id' });

export default Enrollment;
