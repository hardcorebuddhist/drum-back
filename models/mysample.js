"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mySample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mySample.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  mySample.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      tone: DataTypes.STRING,
      bpm: DataTypes.INTEGER,
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "mySample",
    }
  );
  return mySample;
};
