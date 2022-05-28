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
      sample.belongsToMany(models.user, {
        through: "myTracks",
        foreignKey: "userId",
      });
    }
  }
  sample.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      type: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
      tone: { type: DataTypes.STRING },
      bpm: { type: DataTypes.INTEGER },
      styleId: { type: DataTypes.INTEGER },
      userId: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "sample",
    }
  );
  return sample;
};
