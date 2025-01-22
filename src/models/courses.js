import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';

class Course extends Model {}

Course.init(
  {
    curso_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    profesor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['grabado', 'en vivo']], 
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    enlace: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contenido_grabado: {
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
