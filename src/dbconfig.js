const mongoose = require("mongoose");

const connectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => console.log(`Connected to mongodb at ${connectionString}`));
