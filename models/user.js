'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.beforeCreate(function(user,options){

    return new Promise((res,rej)=>{

      if (user.password){
        bcrypt.hash(user.password, 10, function(error,hash){
          user.password_hash = hash;
          res();
        })  
     };

    });

  });
  
  return User;
};