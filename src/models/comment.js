// In Comment model
import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';
import Course from './courses.js'; 
import User from './users.js';

class Comment extends Model {}

Comment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    punctuation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5, 
      },
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    timestamps: false,
  }
);

// Ensure consistent foreign keys
Course.hasMany(Comment, { foreignKey: 'course_id' });
User.hasMany(Comment, { foreignKey: 'user_id' }); // Make it consistent with 'user_id'
Comment.belongsTo(Course, { foreignKey: 'course_id' }); // Consistent foreign key
Comment.belongsTo(User, { foreignKey: 'user_id' }); // Consistent foreign key

export default Comment;
