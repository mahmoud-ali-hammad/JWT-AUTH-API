// dependecies
const express = require('express');
require('dotenv').config();
const connectDB = require('./db/dbConnection');
const app = express();
const notFound = require('./middleware/notFound');
const errorHnadler = require('./middleware/errorHandler');
const mainRouter = require('./routes/mainRoute');
//middlewares
app.use(express.json());
app.use('/api', mainRouter);

app.use(notFound);
app.use(errorHnadler);

//our local port
const port = process.env.PORT || 30001;

// server function
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
