"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sample.belongsTo(models.style, { foreignKey: "styleId" });
    }
  }
  sample.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      type: DataTypes.STRING,
      tone: DataTypes.STRING,
      bpm: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "sample",
    }
  );
  return sample;
};
