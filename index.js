import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hire loop server is running.......!");
});

app.listen(port, () => {
  console.log(`Hire loop server is running on port ${port}`);
});