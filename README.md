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

   - The port to run the server on

     ```
     PORT=1234
     ```

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

With your server running, go to http://localhost:4000 in your browser to open GraphQL Playground. It includes:

- A text area for writing queries
- A play button to execute queries
- A text area for viewing query results
- Views for schema inspection and generated documentation

## Documentation

In addition to the documentation generated by GraphQL Playground, schema documentation is also available as browsable webpages via [graphdoc](https://github.com/2fd/graphdoc).

Run the following command to generate the webpages, which can be hosted on a web server. A `docs/` directory will be created in the root of the project.

```
npm run graphdoc
```
