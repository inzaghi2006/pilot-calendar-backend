const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
require('dotenv').config();
var cors = require('cors');
const port = process.env.PORT || 3000;
const winston = require('winston');
const { errorResponse } = require('./services/response');

const app = express();

app.use(cors());
mongoose.Promise = global.Promise;


mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.json());

app.use('/api', routes);

// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });



// Create a logger that logs to a file
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log' })
  ]
});

// Error handling middleware
function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.ValidationError) {
    // Mongoose validation error
    const errors = {};
    Object.keys(err.errors).forEach((field) => {
      errors[field] = err.errors[field].message;
    });
    res.status(422).json({ errors });
  } else {
    // Other error
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(errorResponse('Server error'));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port} ${process.env.DB_CONNECTION}`)
});
