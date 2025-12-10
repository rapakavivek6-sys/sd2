const { DataTypes } = require('sequelize');
const sequelize = require('../config/db/index');

const User = sequelize.define('User', {
  id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true 
  },
  username: { 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true 
  },
  display_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true 
  },
  password: { 
    type: DataTypes.STRING,
    allowNull: false 
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;
