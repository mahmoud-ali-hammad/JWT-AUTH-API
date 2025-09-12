const express = require('express');
require('dotenv').config();
const connectDB = require('./db/dbConnection');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('first page');
});

const port = process.env.PORT || 30001;
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`lisitening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
