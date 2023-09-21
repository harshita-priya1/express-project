function getMessages(req, res) {
  return res.send("<ul><li>HIIIII!!!</li></ul>");
}
function postMessages(req, res) {
  console.log("Updating...");
}

module.exports = {
  getMessages,
  postMessages,
};
