export class Book {
  static #id = -1;
  static incrementId() {
    return ++this.#id;
  }
  constructor(id, title, author, isbn) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
