# Plantender GraphQL Server

![Version](https://img.shields.io/github/package-json/v/vmroycroft/plantender-server)

A GraphQL server for the Plantender web app. Built with [Apollo Server](https://www.apollographql.com/docs/apollo-server/). Uses Node.js, Docker, Heroku, and MongoDB.

## Quick Start

1. Install [Node.js](https://nodejs.org/en/).

2. Install [Docker](https://www.docker.com/get-started).

3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

4. Install dependencies

   ```
   npm install
   ```

5. Update environment variables

   Rename `.env.example` to `.env` and set the following variables:

   - The server port

     ```
     PORT=1234
     ```

   - The connection string for your MongoDB instance

     ```
     DB_CONNECTION_STRING=db-connection-string
     ```

   - Your Apollo key

     ```
     APOLLO_KEY=apollo-key
     ```

6. Open a console and use Docker Compose to start a Docker container running MongoDB.

   ```
   docker-compose up -d
   ```

7. Start the server & watch source

   ```
   npm start
   ```

## GraphQL Playground

Apollo Server provides [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) for you to test your GraphQL queries before implementing them in client code.

With your server running, go to http://localhost:4000/graphql in your browser to open GraphQL Playground. It includes:

- A text area for writing queries
- A play button to execute queries
- A text area for viewing query results
- Views for schema inspection and generated documentation
