const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Harshita",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "flowers.jpeg"));
  // return res.send("<ul><li>HIIIII!!!</li></ul>");
}
function postMessages(req, res) {
  console.log("Updating...");
}

module.exports = {
  getMessages,
  postMessages,
};
