const express = require("express");
const SampleRouter = require("./routers/sampleRouter");
const cors = require("cors");

const PORT = 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/samples", SampleRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
