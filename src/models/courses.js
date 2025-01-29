import sequelize from '../database/database.js'; // Default import
import { DataTypes, Model } from 'sequelize'; 

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
    type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['recorded', 'live']], // Only allows these values
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    video_link: {
      type: DataTypes.TEXT,
      allowNull: true, // For recorded courses only
      validate: {
        isUrl: true, // Verify that it is a valid link
      },
    },
    front_page: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Allows prices with decimals
      allowNull: false,
    },
    quota: {
      type: DataTypes.INTEGER,
      allowNull: true, // Optional for recorded courses
      validate: {
        min: 1, // Make sure it is a positive number
      },
    },
  },
  {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    timestamps: false,
    hooks: {
      beforeValidate: (course) => {
        if (course.type === 'live' && !course.quota) {
          throw new Error('Live courses must have a quota.');
        }
      },
    },
  }
);

export default Course;
