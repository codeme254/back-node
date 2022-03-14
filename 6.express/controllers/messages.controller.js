const path = require("path");

function getMessages(req, res) {
  // res.send("['message1', 'message 2', 'message 3']");
  //   res.send("<ul><li>Helloo! Albert!</li></ul>");
  // res.sendFile(path.join(__dirname,'..','public','images', 'file-samp.jpg'));
  res.render('messages', {
    title: "messages to my friends",
    friend: "Elon Musk"
  })
}

function postMessage(req, res) {
  res.send("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
