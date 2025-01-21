import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';

class Course extends Model {}

Course.init(
  {
    id_course: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    professor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isLive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Course',
    tableName: 'courses', // Corresponding table name in the database
    timestamps: false, // If you don't want Sequelize to automatically add timestamps
  }
);

export default Course;
