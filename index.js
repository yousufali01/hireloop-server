import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;

import { MongoClient } from "mongodb";
import 'dotenv/config';

// middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.et7c49i.mongodb.net/`,
);
console.log(client);


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

app.get("/", (req, res) => {
  res.send("Hire loop server is running.......!");
});

app.listen(port, () => {
  console.log(`Hire loop server is running on port ${port}`);
});
