/*
Currently build so you can read data at localhost:5000/graphql
*/

const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const {graphqlHTTP : expressGraphQL} = require('express-graphql');
const User = require("./models/User");
const Posts = require("./models/Posts");
const schema = require("./schema/schema");


const app = express();
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(
    "/graphql",
    expressGraphQL({
      schema,
      graphiql: true
    })
  );
app.listen(5000, () => console.log('Server is running on port 5000'));
