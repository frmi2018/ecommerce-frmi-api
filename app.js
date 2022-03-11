const express = require("express");

require("dotenv").config();

// express app
const app = express();

// db
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB CONNECTED"));
}

// routes
app.get("/", (req, res) => {
  res.send("hello from node");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not Found" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
