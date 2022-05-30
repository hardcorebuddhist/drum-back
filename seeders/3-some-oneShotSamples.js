"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("oneShotSamples", [
      {
        name: "KICK",
        type: "kick",
        url: "https://audio.jukehost.co.uk/JRVKYWCmgRxpKCI3ijAsm61z29599GmC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SNARE",
        type: "snare",
        url: "https://audio.jukehost.co.uk/nA3BlaP27nLNre0gHihDWhDngWeg5HAk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CLAP",
        type: "clap",
        url: "https://audio.jukehost.co.uk/ovksH6BwP0eyhnMMITe8cijRDP8cmPQR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TOM",
        type: "tom",
        url: "https://audio.jukehost.co.uk/uolSXc8GYns6Y08sqHNud9PvEkCOQBKc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CH",
        type: "ch",
        url: "https://audio.jukehost.co.uk/xQyC8nIW7CxX6O7L9y68NDFuNI9bBKIA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "OH",
        type: "oh",
        url: "https://audio.jukehost.co.uk/MLaQPc07Eg9RYDtj19Y708ZWHMf4ZWyu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CRASH",
        type: "crash",
        url: "https://audio.jukehost.co.uk/J3XUUjWl7nb9qK69HO8rgbri1c7YC3GM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("oneShotSamples", null, {});
  },
};
