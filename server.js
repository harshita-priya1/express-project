const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} , ${req.url} , ${req.baseUrl} , ${delta}ms`);
});

app.use("/site", express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hiiii!!!",
    caption: "Let's go!!!",
  });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
