const { Router } = require("express");
const router = new Router();
const Sample = require("../models").sample;

router.get("/", async (req, res, next) => {
  try {
    res.send(await Sample.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
