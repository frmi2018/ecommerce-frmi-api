const express = require("express");

require("dotenv").config();

// import routes
const userRoutes = require("./routes/user");

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

// routes middleware
app.use("/api", userRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not Found" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
