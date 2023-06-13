/*
module.exports = (sequelize,DataTypes)=>{

    const Users = sequelize.define('users', {
        id: {
          type:DataTypes.INTEGER,
          primaryKey:true,
      },
        name: DataTypes.STRING,
      });
}
*/

/*
const { Model , DataTypes , Sequelize} = require('sequelize');
const sequelize = require('../../lib/sequealize');

const USER_TABLE = 'user_table'

const UserSchema = {
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
    },
      name: DataTypes.STRING,
}

class User extends Model {
    static associate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName:USER_TABLE,
            modelName:'User',
            timestamps:false
        }
    }
}
*/

/*
const Users = sequelize.define('User', {
  id: {
    type:DataTypes.INTEGER,
    primaryKey:true,
},
  name: DataTypes.STRING,
});



module.exports = {  USER_TABLE , UserSchema , User }
*/