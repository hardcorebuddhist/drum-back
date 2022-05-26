"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      style.hasMany(models.sample, { foreignKey: "styleId" });
    }
  }
  style.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      backgroundImage: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "style",
    }
  );
  return style;
};
