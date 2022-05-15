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
        {
          name: "Drumloop_1",
          type: "drums",
          url: "https://audio.jukehost.co.uk/xqNwk2md2a1jsox3vFRWT2DY6zhh30Vf",
          tone: "",
          bpm: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drumloop_2",
          type: "drums",
          url: "https://audio.jukehost.co.uk/xIsbWpYjQDfxLTFhQFvdidRNMaL6IFvo",
          tone: "",
          bpm: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drumloop_3",
          type: "drums",
          url: "https://audio.jukehost.co.uk/lNcBjlvyb5TOPJxnHLK50GT2J74uWoc2",
          tone: "",
          bpm: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drumloop_4",
          type: "drums",
          url: "https://audio.jukehost.co.uk/6PcUvlFYE2aGMxxifJDo05scSJs88Lx6",
          tone: "",
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
