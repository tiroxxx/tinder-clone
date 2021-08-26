const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
require('dotenv').config();
const Users = require('./models/Users');

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json())
app.use(cors())

// DB config
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO SNEAKY PERSON'));

app.post('/users', (req, res) => {
  const user = req.body;

  Users.create(user, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/users', (req, res) => {
  Users.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => {
  console.log(`listening on localhost: ${port}`);
});
