function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const idBook = new Book(41234);
console.log(idBook);
console.log("Livro criado em: ", idBook.createdAt);

const idPen = new Pen(12342);
console.log(idPen);
console.log("Caneta criada em: ", idPen.createdAt);
