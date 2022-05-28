const express = require("express");
const corsMiddleWare = require("cors");
const authMiddleWare = require("./auth/middleware");
const sampleRouter = require("./routers/sampleRouter");
const authRouter = require("./routers/auth");
const { PORT } = require("./config/constants");

const app = express();

app.use(corsMiddleWare());

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use("/auth", authRouter);
app.use("/samples", sampleRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
