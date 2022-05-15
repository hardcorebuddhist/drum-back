const { Router } = require("express");
const router = new Router();
const Sample = require("../models").sample;

// All samples

router.get("/", async (req, res, next) => {
  try {
    res.send(await Sample.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// DRUM SAMPLES

router.get("/drums", async (req, res, next) => {
  try {
    const drumSamples = await Sample.findAll({ where: { type: "drums" } });
    if (drumSamples) {
      res.send(drumSamples);
    } else {
      res.status(404).send("Sample not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
