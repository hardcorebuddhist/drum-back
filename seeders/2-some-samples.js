"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "samples",
      [
        {
          name: "Drums_1",
          type: "drums",
          url: "https://audio.jukehost.co.uk/i9ZnMFYxA7BuJmu4M6oVzDAUFKL8epmT",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drums_2",
          type: "drums",
          url: "https://audio.jukehost.co.uk/xpKRQqvD3sItrMXlnikwWDpKkhv9aW2H",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drums_3",
          type: "drums",
          url: "https://audio.jukehost.co.uk/9npZh6HPCRGbFBKh09VE5mL2HOTbU01o",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drums_4",
          type: "drums",
          url: "https://audio.jukehost.co.uk/2uYVEOug6gyASzxOrIpah8MDdxq11h2m",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drums_5",
          type: "drums",
          url: "https://audio.jukehost.co.uk/GpIIu7tQ3WRh6iGbARWcqGfMpvP78EuP",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bass_1",
          type: "bass",
          url: "https://audio.jukehost.co.uk/asLkbMy1qpukj8fu3GuAMgbvkPPMczEQ",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bass_2",
          type: "bass",
          url: "https://audio.jukehost.co.uk/Heu7559bZ878bA1ae0qoPObjdXihbXZs",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bass_3",
          type: "bass",
          url: "https://audio.jukehost.co.uk/GcPySNOBT8dfRFrXBgVJR4dbyQSIxv85",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bass_4",
          type: "bass",
          url: "https://audio.jukehost.co.uk/Rq6Vcv0l0jmuuNqKI5SSyyXQgwUZFO6X",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bass_5",
          type: "bass",
          url: "https://audio.jukehost.co.uk/5asxynPOn4w8BgdfX1hr2Wz1ifv3hhEx",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Melody_1",
          type: "melody",
          url: "https://audio.jukehost.co.uk/uHNg1aTxQgrO992a80of7lpI28ckSNyN",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Melody_2",
          type: "melody",
          url: "https://audio.jukehost.co.uk/5fOfbxq59l7Hs343YbdyzcvXRywjqMSJ",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Melody_3",
          type: "melody",
          url: "https://audio.jukehost.co.uk/8DW5M4lSlflfTH6uGh6dJ8DWWHsliXhh",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Melody_4",
          type: "melody",
          url: "https://audio.jukehost.co.uk/RA2Bi9VZRVE1Chz9ON2PCgmEkkHuWLJa",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Melody_5",
          type: "melody",
          url: "https://audio.jukehost.co.uk/GKPWhtTP7ciW1n3fhkpNJosPLkNuRqj5",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pad_1",
          type: "melody",
          url: "https://audio.jukehost.co.uk/f9Krx6S8nakb9I0zkXAuFetgoBVDFDqL",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pad_2",
          type: "melody",
          url: "https://audio.jukehost.co.uk/zQhHSee6iUs2bhtr4CCW0D1wsxjaq4Cq",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pad_3",
          type: "melody",
          url: "https://audio.jukehost.co.uk/LXvUlFmtE3oFGJFvdDeu7iVWmuDAoZOz",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pad_4",
          type: "melody",
          url: "https://audio.jukehost.co.uk/jUY7pXC1Lpsy3w32QXtkde44gT1lkUAz",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pad_5",
          type: "melody",
          url: "https://audio.jukehost.co.uk/JVqCNKwrbTHsVwHomhkvyRzZY5r5Okr6",
          tone: "G#",
          bpm: 122,
          styleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("samples", null, {});
  },
};
