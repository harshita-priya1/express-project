const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "A",
  },
  {
    id: 1,
    name: "B",
  },
  {
    id: 2,
    name: "C",
  },
];

app.get("/", (req, res) => {
  res.send({ id: 1, name: "Harshita" });
});
app.get("/friends", (req, res) => {
  res.json(friends);
});
app.get("/friends/:fId", (req, res) => {
  const fId = Number(req.params.fId);
  const friend = friends[fId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
