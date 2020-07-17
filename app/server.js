const express = require('express');
const app = express();
const knex = require('knex');
app.listen(3333, () => {
  console.log('Server running');
});