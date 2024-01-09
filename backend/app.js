const connectToMongo = require("./db");
const express = require("express");
require('dotenv').config();
const cors = require("cors");

const app = express();
const port = process.env.PORT ||  4000;

//Connect to mongoDB
connectToMongo();

app.use(cors());
app.use(express.json());

// Avilabel All Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Welcome to the iNotbook app!");
});

app.listen(port, () => {
  console.log(`\niNotbook app listening on port ${port}`);
});
