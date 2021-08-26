const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares

// DB config
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO SNEAKY PERSON'));

// Listener
app.listen(port, () => {
  console.log(`listening on localhost: ${port}`);
});
