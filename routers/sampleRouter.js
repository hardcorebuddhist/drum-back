const { Router } = require("express");
const Sample = require("../models").sample;

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

module.exports = router;
