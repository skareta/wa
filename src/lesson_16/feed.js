import "./feed.scss";

function Feed(mountPoint) {
  this.mountPoint = mountPoint;
}

Feed.prototype.init = function() {
  this.render();
  this.getPosts();
};

Feed.prototype.render = function() {
  this.container = document.createElement("div");
  this.container.classList.add("feed__container");
  this.mountPoint.appendChild(this.container);
};

Feed.prototype.getPosts = function() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/posts");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      const data = JSON.parse(xhr.response);
      this.renderPosts(data);
    }
  };
};

Feed.prototype.renderPosts = function(posts) {
  for (let post of posts) {
    this.renderPost(post);
  }
};

Feed.prototype.renderPost = function(post) {
  const div = document.createElement("div");
  div.classList.add("feed__post");
  const img = document.createElement("img");
  img.classList.add("post__img");
  img.src = post.img;
  const title = document.createElement("h2");
  title.textContent = post.title;
  title.classList.add("post__title");
  div.appendChild(img);
  div.appendChild(title);
  this.container.appendChild(div);
};

export { Feed };
