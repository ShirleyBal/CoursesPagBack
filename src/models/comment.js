import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../database/database.js'; 
import Course from './Course.js'; 
import User from './User.js';
import Enrollment from './Enrollment.js';

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
        max: 5, // score between 1 and 5
      },
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    timestamps: false,
    hooks: {
      beforeCreate: async (comment) => {
        // Check if the user has purchased the course
        const enrollment = await Enrollment.findOne({
          where: {
            course_id: comment.course_id,
            user_id: comment.user_id,
            state: 'approved', // User must be approved
          },
        });

        if (!enrollment) {
          throw new Error('You must have purchased the course to comment.');
        }

        // Check if there is already a user comment on this course
        const existingComment = await Comment.findOne({
          where: {
            course_id: comment.course_id,
            user_id: comment.user_id,
          },
        });

        if (existingComment) {
          throw new Error('You can only comment once per course.');
        }
      },
    },
  }
);

// Relations
Course.hasMany(Comment, { foreignKey: 'course_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(Course, { foreignKey: 'course_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

export default Comment;
