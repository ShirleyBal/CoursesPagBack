// In User model
import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';
import Enrollment from './enrollment.js'; // If you're using the Enrollment model

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['alumno', 'profesor']], // Validación para rol
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);

// Relationship with enrollments (if needed)
User.hasMany(Enrollment, { foreignKey: 'user_id' });

export default User;
