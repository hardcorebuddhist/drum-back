"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "samples",
      [
        {
          name: "Synth_1",
          type: "synths",
          url: "https://audio.jukehost.co.uk/eFspdEZumMjHLxz0Tn0EPRHFmsJWEvR1",
          tone: "E",
          bpm: 120,
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
