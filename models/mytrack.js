"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class myTrack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      myTrack.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  myTrack.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      bpm: DataTypes.INTEGER,
      userId: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "myTrack",
    }
  );
  return myTrack;
};
