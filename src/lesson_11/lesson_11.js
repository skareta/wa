import "./lesson_11.scss";
const words = ["Hello word", "test", "join", "test", "DEPRICATED"];
const colors = ["red", "green", "aqua", "magenta"];
const randomIndex = Math.floor(Math.random() * colors.length);
const color = colors[randomIndex];
console.log(color);
let word = "";
for (let i = 0; i < words.length; i++) {
  if (word.length <= words[i].length) {
    word = words[i];
  }
}
console.log(word);
