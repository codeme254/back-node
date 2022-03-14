const model = require('../models/friends.model')

function postFriend(req, res) {
  if (!req.body.name) {
    //   we can as well return:
    res.status(400).json({
      error: "Missing friend name",
    });
  } else {
    const newFriend = {
      id: model.length,
      name: req.body.name,
    };
    model.push(newFriend);
    res.json(newFriend);
  }
}

function getFriends(req, res) {
  res.status(200).json(model); //the data will be treated as json
}

function getFriend(req, res) {
  const frinedId = Number(req.params.friendId);
  const friend = model[frinedId];
  if (friend) {
    res.json(friend);
  } else { 
    res.status(404).json({
      error: "friend does not exist",
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
