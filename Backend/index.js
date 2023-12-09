require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./database/connect");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const notFoundMiddleWare = require("./middlewares/not-found");
const authMiddleWare = require("./middlewares/authenticate");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/public/assets"));

const userRouter = require("./routes/usersRoute");
const imageUploadRoute = require("./routes/uploadImage");
const fileUploadRoute = require("./routes/uploadFile");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/image", imageUploadRoute);
app.use("/api/v1/file", fileUploadRoute);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;
const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => console.log(`server is listening on port ${port}`));
};

start();
