'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  return Task;
};