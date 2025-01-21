import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';
import Course from './courses.js';

class Comment extends Model {}

Comment.init(
  {
    id_comment: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    timestamps: false,
  }
);

// Set up relationships
Comment.belongsTo(Course, { foreignKey: 'course_id' });

export default Comment;
