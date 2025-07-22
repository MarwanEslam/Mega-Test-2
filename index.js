// index.js
require("dotenv").config(); // To load MONGO_URI from .env
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const startServer = async () => {
  const app = express();

  // Apollo Server setup
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  // MongoDB connection
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () =>
    console.log("✅ Connected to MongoDB")
  );

  mongoose.connection.on("error", (err) =>
    console.error("❌ MongoDB connection error:", err)
  );

  // Default index page
  app.get("/", (req, res) => {
    res.send("🚀 Welcome to the GraphQL + MongoDB Server");
  });

  // Start server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
