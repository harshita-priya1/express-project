const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/messages", (req, res) => {
  res.send("<ul><li>Hiiii!!!</li></ul>");
});
app.post("/messages", (req, res) => {
  console.log("Updating...");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
