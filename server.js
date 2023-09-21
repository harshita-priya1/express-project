const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} , ${req.url} , ${delta}`);
});
app.use(express.json());

const friendsRouter = express.Router();

friendsRouter.post("/", friendsController.postFriends);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:fId", friendsController.getFriend);

app.use("/friends", friendsRouter);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessages);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
