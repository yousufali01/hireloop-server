import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;

import { MongoClient } from "mongodb";
import "dotenv/config";

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.et7c49i.mongodb.net/`,
);

// console.log(client);

// Connect to MongoDB
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connectedClient = await connectToMongoDB();

// Database and collections
const database = connectedClient.db("hireloop");
const usersCollection = database.collection("user");
const jobsCollection = database.collection("jobs");

// Root route
app.get("/", (req, res) => {
  res.send("Hire loop server is running.......!");
});

// Get all users
app.get("/users", async (req, res) => {
  const cursor = usersCollection.find({});
  const result = await cursor.toArray();
  res.send(result);
});

// Post a new job
app.post("/jobs", async (req, res) => {
  try {
    const jobData = req.body;

    // Insert job data into MongoDB
    const result = await jobsCollection.insertOne({
      ...jobData,
      createdAt: new Date(),
    });

    res.status(201).send({
      success: true,
      message: "Job posted successfully!",
      insertedId: result.insertedId,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Failed to post job!",
      error: err.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Hire loop server is running on port ${port}`);
});
