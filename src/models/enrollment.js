import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';

class Enrollment extends Model {}

Enrollment.init(
  {
    inscription_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['pending', 'approved', 'rejected']], // Validation for state
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

export default Enrollment;
