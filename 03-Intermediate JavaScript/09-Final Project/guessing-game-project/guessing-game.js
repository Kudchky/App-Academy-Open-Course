const { error } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber;
let numAttempts;

const randomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkGuess = (num, secretNumber) => {
  if (num > secretNumber) {
    console.log("Too high");
    return false;
  } else if (num < secretNumber) {
    console.log("Too low");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
};

const askGuess = (secretNumber, numAttempts) => {
  numAttempts--;
  rl.question("Enter a guess: ", (answer) => {
    if (checkGuess(Number(answer), Number(secretNumber))) {
      console.log("You Win!");
      rl.close();
    } else if (numAttempts === 0) {
      console.log("You Lose!");
      rl.close();
    } else {
      askGuess(secretNumber, numAttempts);
    }
  });
};

const askRange = (numAttempts) => {
  rl.question("Enter a max number: *", (answer) => {
    let max = Number(answer);
    rl.question("Enter a min number: *", (answer) => {
      let min = Number(answer);
      console.log(
        "I'm thinking of a number between " + min + " and " + max + "..."
      );
      secretNumber = randomInRange(min, max);
      askGuess(secretNumber, numAttempts);
    });
  });
};

const askLimit = () => {
  rl.question("Enter number of attempts: ", (answer) => {
    try {
      numAttempts = Number(answer);
      if (isNaN(numAttempts) || numAttempts <= 0) {
        throw new Error(
          "Invalid input. Please enter a valid positive number...!"
        );
      }
      askRange(numAttempts);
    } catch (error) {
      console.error(error.message);
      askLimit();
    }
  });
};

askLimit();
