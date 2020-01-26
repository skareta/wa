import "./lesson_16.scss";

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "http://localhost:3000/posts");
// xhr.send();
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     const response = JSON.parse(xhr.response);
//     console.log(typeof response, response);
//     // document.write(xhr.response);
//     // for (let item of response) {
//     //   document.write(`<h2>${item.id}</h2>`);
//     // }
//   }
//   console.log(xhr);
// };
import { Feed } from "./feed";

const body = document.querySelector("body");
const feed = new Feed(body);
feed.init();
