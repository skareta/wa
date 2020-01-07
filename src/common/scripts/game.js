let userName = prompt("What's your name?");
alert("Hello, " + userName);

let words = ["программа", "макака", "прекрасный", "оладушек"];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
while (remainingLetters > 0) {
  // Основной код
  // Показываем состояние игры
  // Запрашиваем вариант ответа
  // Обновляем answerArray и remainingLetters для каждого
  // вхождения угаданной буквы
  alert(answerArray.join(" "));
  let guess = prompt("Enter letter or click on 'Cancel' to quit");
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите только одну букву.");
  } else {
    // Обновляем состояние игры
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
