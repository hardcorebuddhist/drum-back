const { Router } = require("express");
const Style = require("../models").style;
const Sample = require("../models").sample;

const router = new Router();

// GET ALL STYLES INCLUDING SAMPLES

router.get("/", async (req, res, next) => {
  try {
    const allStyles = await Style.findAll({ include: [Sample] });
    if (allStyles) {
      res.send(allStyles);
    } else {
      res.status(404).send("Style not found");
    }
  } catch (e) {
    next(e);
  }
});

// STYLE BY ID INCLUDING SAMPLES

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "Style id is not a number" });
  }

  const style = await Style.findByPk(id, {
    // include: [Sample],
    // order: [[Sample, "createdAt", "DESC"]],
  });

  if (style === null) {
    return res.status(404).send({ message: "Style not found" });
  }

  res.status(200).send({ message: "ok", style });
});

module.exports = router;
