const express = require("express");
require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const { graphqlHTTP } = require("express-graphql");

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
