const sayHelloTo = require("../send-messages/say-hello-to");

let msg1 = "You are looking very spudly today!";
let msg2 = "There's a good deal on mattresses tomorrow.";
let msg3 = "Do you like to do things in unnecessarily complicated ways?";

function giveMessageToMrsPotato(message) {
  sayHelloTo(`Mrs. Potato`);
  console.log(`(Psst... ${message})`);
}

giveMessageToMrsPotato("Hi Buzz");

module.exports = {
  giveMessageToMrsPotato,
  msg1,
  msg2,
  msg3,
};
