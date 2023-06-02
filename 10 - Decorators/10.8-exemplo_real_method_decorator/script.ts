function checkIfUserPosted() {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const somePost = new Post();
somePost.post("Meu primeiro post!", somePost.alreadyPosted);
somePost.post("Meu segundo post!", somePost.alreadyPosted);
somePost.post("Meu terceiro post!", somePost.alreadyPosted);
