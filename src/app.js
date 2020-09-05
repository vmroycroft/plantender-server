require("dotenv").config();

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

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Waterlog server ready at ${url}`);
});
