const REQUEST_TIMEOUT = 500;
module.exports.ANOTHER_TIMEOUT = 500;

function encrypt(data) {
  return "encrypred data";
}
function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports.sayHello = function sayHello(){
    console.log("hello");
}

exports.greetBack = function greetBack(){
    console.log("hello to");
}



// this type of exporting is the one that is highly recommended
module.exports = {
  REQUEST_TIMEOUT,
  send,
};
