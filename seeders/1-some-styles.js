"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "styles",
      [
        {
          name: "House",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Techno",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chill",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
