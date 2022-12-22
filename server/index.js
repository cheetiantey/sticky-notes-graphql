const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const port = process.env.PORT || 5000;
require("dotenv").config()

const app = express();

app.use(cors());

app.listen(port, console.log(`Server is running on ${port}`));