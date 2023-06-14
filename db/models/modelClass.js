const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../lib/sequealize')

class User extends Model {}

User.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
      name: DataTypes.STRING,
  
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = { User };