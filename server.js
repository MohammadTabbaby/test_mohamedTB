// version avec Express Framework
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://wahid:88ciKvnaGvM4HdHa@cluster0.rpxl2.mongodb.net/appareilsDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });

app.listen(3000, () => console.log('server started at port : 3000 !'));

