const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const postsRoute = require('./routes/posts');

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
  res.send('We are in the home directory');
});

mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to db');
  }
);

app.listen(3000);
