const { Router } = require("express");
const { Op } = require("sequelize");
const Favorite = require("../migrations/5-favorite");
const Sample = require("../models").sample;
const OneShotSamples = require("../models").oneShotSample;

const router = new Router();

// ALL SAMPLES

router.get("/", async (req, res, next) => {
  try {
    const allSamples = await Sample.findAll();
    if (allSamples) {
      res.send(allSamples);
    } else {
      res.status(404).send("Sample not found");
    }
  } catch (e) {
    next(e);
  }
});
// // FILTERED SAMPLESnew

// router.get("/:style/:type", async (req, res, next) => {
//   const style = parseInt(req.params.style);
//   const type = req.params.type;
//   try {
//     let samples;
//     if (!style && type) {
//       samples = await Sample.findAll({
//         where: { type: type },
//       });
//     } else if (!type && style) {
//       samples = await Sample.findAll({
//         where: { styleId: style },
//       });
//     } else if (!type && !style) {
//       samples = await Sample.findAll();
//     } else {
//       samples = await Sample.findAll({
//         where: {
//           [Op.and]: [{ styleId: style }, { type: type }],
//         },
//       });
//     }
//     if (samples) {
//       res.send(samples);
//     } else {
//       res.status(404).send("Sample not found");
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// All OneShotSamples

router.get("/oneshot", async (req, res, next) => {
  try {
    const samples = await OneShotSamples.findAll();
    if (samples) {
      res.send(samples);
    } else {
      res.status(404).send("Sample not found");
    }
  } catch (e) {
    next(e);
  }
});

// // POST FAVORITE SAMPLE

// router.post("/:userId/:sampleId", auth, async (req, res) => {
//   const sample = await Sample.findByPk(req.params.id, { include: Favorite });
//   const user = req.user;

//   if (sample === null) {
//     return res.status(404).send({ message: "This sample does not exist" });
//   }

//   if (!sample.userId === req.userId) {
//     return res.status(403).send({
//       message: "You are not authorized to add this sample to favorites",
//     });
//   }

//   const { userId, sampleId } = req.body;

//   const favoriteSample = await Favorite.create({
//     userId: req.userId,
//     sampleId: req.sampleId,
//   });

//   return res
//     .status(201)
//     .send({ message: "Favorite sample created", favoriteSample });
// });

module.exports = router;
