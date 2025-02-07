// In User model
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../database/database.js'; 
import bcrypt from 'bcryptjs'; // Password encryption library
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
        isIn: [['student', 'administrator']], 
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
          user.password = await bcrypt.hash(user.password, 10); // Encrypt the password before saving
        }
      },
    },
  }
);

// Method for comparing passwords
User.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Relationship with inscriptions
User.hasMany(Enrollment, { foreignKey: 'user_id' });

export default User;
