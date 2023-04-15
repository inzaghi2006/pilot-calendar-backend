const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
require('dotenv').config();

var cors = require('cors');


const app = express();

const port = process.env.PORT || 3000;

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

app.use('/', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port} ${process.env.DB_CONNECTION}`)
});
