import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';
import Course from './courses.js';
import User from './users.js';

class Comment extends Model {}

Comment.init(
  {
    comentario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5, // Validación para que la puntuación esté entre 1 y 5
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

// Relación con las tablas de cursos y usuarios
Course.hasMany(Comment, { foreignKey: 'curso_id' });
User.hasMany(Comment, { foreignKey: 'usuario_id' });
Comment.belongsTo(Course, { foreignKey: 'curso_id' });
Comment.belongsTo(User, { foreignKey: 'usuario_id' });

export default Comment;
