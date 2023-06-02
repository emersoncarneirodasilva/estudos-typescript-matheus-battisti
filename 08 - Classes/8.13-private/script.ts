class PrivateClass {
  private name = "Private Class";

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log("Sou privado!");
  }

  showPrivateMethodResult() {
    this.privateMethod();
  }
}

const privateName = new PrivateClass();
console.log(privateName.showName());
privateName.showPrivateMethodResult();
