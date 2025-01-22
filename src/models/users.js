import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database.js';

class User extends Model {}

User.init(
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['alumno', 'profesor']], // Validación para rol
      },
    },
    contrasena: {
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

export default User;
