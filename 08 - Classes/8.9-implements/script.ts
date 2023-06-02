interface ShowTitle {
  itemTitle(): string;
}

class BlogPost implements ShowTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new BlogPost("Olá Mundo!");
console.log(myPost);
console.log(myPost.itemTitle());
