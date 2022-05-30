'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class oneShotSample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  oneShotSample.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'oneShotSample',
  });
  return oneShotSample;
};