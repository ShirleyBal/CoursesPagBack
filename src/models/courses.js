import { DataTypes, Model } from 'sequelize'; 
import { sequelize } from '../database/database.js';

class Course extends Model {}

Course.init(
  {
    course_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recorded_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    front_page: {
      type: DataTypes.TEXT, 
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    timestamps: false,
  }
);

export default Course;
