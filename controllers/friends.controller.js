const friends = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Name is not valid!",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);
  res.json(newFriend);
}
function getFriends(req, res) {
  res.json(friends);
}
function getFriend(req, res) {
  const fId = Number(req.params.fId);
  const friend = friends[fId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist!",
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriend,
};
