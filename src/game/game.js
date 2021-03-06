import "./game.scss";

let userName = prompt("What's your name?");
alert("Hello, " + userName + ". Let's play the game");
let letsPlay = true;
while (letsPlay === true) {
  let words = [];

  words = [
    "name",
    "tree",
    "truth",
    "help",
    "cloud",
    "elephant",
    "dog",
    "cat",
    "computer",
    "game"
  ];

  let word = words[Math.floor(Math.random() * words.length)].toUpperCase();

  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  let remainingLetters = word.length;
  let attempts = word.length + 3;
  while (remainingLetters > 0 && attempts > 0) {
    alert(
      "Guess the word\n" +
        "You have " +
        attempts +
        " attemps\n" +
        "Remaining " +
        remainingLetters +
        " letters\n" +
        answerArray.join(" ").toLowerCase()
    );
    let guess = prompt("Enter letter or click 'Cancel' to quit");
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please add only one letter");
    } else {
      // Обновляем состояние игры
      let counter = 0;
      for (let j = 0; j < word.length; j++) {
        if (
          word[j].toLowerCase() === guess.toLowerCase() &&
          answerArray[j] === "_"
        ) {
          answerArray[j] = guess;
          remainingLetters--;
          counter++;
        }
      }
      if (counter === 0) {
        alert(
          "There is no such letter in the searching word or letter is already found. Try another letter"
        );
      }
    }
    attempts--;
  }
  // alert(answerArray.join(" "));
  if (remainingLetters === 0) {
    alert("Well done, " + userName + "! The word is: " + word.toLowerCase());
  } else {
    alert("Attempt failed. Game is over");
  }
  letsPlay = confirm("Let's play one more time?");
}

alert("Goodbye!");
