"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("samples", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tone: {
        type: Sequelize.STRING,
      },
      bpm: {
        type: Sequelize.INTEGER,
      },
      styleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "styles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("samples");
  },
};
