const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { buildSchema } = require('graphql');
const Schema = require('./api/schema');
const app = express();

app.use('/api', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Server running');
});