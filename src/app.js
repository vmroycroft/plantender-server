require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

require("./dbconfig.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    reportSchema: true,
    graphVariant: "current",
  },
});

const app = express();

server.applyMiddleware({ app });

// app.get("/", (req, res) => {
//   res.send("I'm here :)");
// });

app.listen({ port: process.env.PORT || 4000 }, () => console.log(`Waterlog server ready at ${server.graphqlPath}`));
