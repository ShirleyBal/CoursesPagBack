// In User model
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../database/database.js'; 
import bcrypt from 'bcryptjs'; // Librería para encriptar contraseñas
import Enrollment from './enrollment.js';

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
        isIn: [['student', 'administrator']], // Validación para rol
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
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10); // Encripta la contraseña antes de guardar
        }
      },
    },
  }
);

// Método para comparar contraseñas
User.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Relación con las inscripciones
User.hasMany(Enrollment, { foreignKey: 'user_id' });

export default User;
