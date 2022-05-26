"use strict";

const { contentType } = require("express/lib/response");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "styles",
      [
        {
          name: "Melodic Techno",
          backgroundImage:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.uwa.edu.au%2Fstudy%2Fcourses%2Fmusic-electronic-music-and-sound-design&psig=AOvVaw3jYEzFE8xIoEamlNLrqyEy&ust=1653641960422000&source=images&cd=vfe&ved=2ahUKEwj-tK6-5vz3AhVQi_0HHXzbAgwQjRx6BAgAEAs",
          image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F1GAHCeWXe4fjPUgnYHaWd0&psig=AOvVaw2wKJbHlw5cDrQywZhVC2hE&ust=1653641214423000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC7zfDj_PcCFQAAAAAdAAAAABAE",
          content:
            "Melodic techno has a more atmospheric and hypnotic sound, with emphasis on arpeggiated minor melodies closely tying it with progressive trance. The tempo of the genres stays around 120 bpm.",
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
