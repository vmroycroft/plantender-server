# Waterlog GraphQL Server

![Version](https://img.shields.io/github/package-json/v/vmroycroft/waterlog-server)

A GraphQL server for the Waterlog web app. Built with [Apollo Server](https://www.apollographql.com/docs/apollo-server/).

## Quick Start

1. Install dependencies

   ```
   npm install
   ```

2. Update environment variables

   Rename `.env.example` to `.env` and set the following variables:

   - Your MongoDB connection string

     ```
     DB_CONNECTION_STRING=db-connection-string
     ```

   - Your Apollo key

     ```
     APOLLO_KEY=apollo-key
     ```

3. Start the server & watch source

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
