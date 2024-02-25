const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;
const mongoDB = process.env.MONGODB;
const productRouter = require("./src/routes/ProductRouter");
const categoryRouter = require("./src/routes/CategoryRouter");

const connectToMongo = async () => {
  await mongoose.connect(mongoDB);
  console.log("Connected to MongoDB---->");
};

connectToMongo();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// VIEW ENGINE

// ROUTES
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);

app.listen(port, () => {
  console.log(`==== Server running on port http://localhost:${port} ====>`);
});
