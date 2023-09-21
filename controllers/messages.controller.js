const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "flowers.jpeg"));
  // return res.send("<ul><li>HIIIII!!!</li></ul>");
}
function postMessages(req, res) {
  console.log("Updating...");
}

module.exports = {
  getMessages,
  postMessages,
};
