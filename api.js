require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/mongo");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", require("./app/routes"));

dbConnect();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Servidor escuchando en el puerto " + PORT));