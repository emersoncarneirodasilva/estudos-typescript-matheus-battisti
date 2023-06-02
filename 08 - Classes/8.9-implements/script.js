"use strict";
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new BlogPost("Olá Mundo!");
console.log(myPost);
console.log(myPost.itemTitle());
