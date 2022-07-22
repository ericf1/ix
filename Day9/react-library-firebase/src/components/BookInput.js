import React from "react";
import { Book } from "../models/book";

export default function BookInput({ setLibrary, bookService }) {
  async function handleFormSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const isbn = e.target.isbn.value;
    if (!title || !author || !isbn) {
      alert("You have left fields blank :(");
      return;
    }
    let book = new Book(null, title, author, isbn);

    try {
      book = await bookService.createBook(book);
    } catch (err) {
      console.error(err);
    }

    setLibrary((prevLibrary) => [...prevLibrary, book]);
    e.target.reset();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          name="title"
          id="title-input"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          name="author"
          id="author-input"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">#ISBN</label>
        <input
          name="isbn"
          id="isbn-input"
          type="text"
          className="form-control"
        />
      </div>

      <div className="d-grid gap-2">
        <button className="btn btn-outline-secondary" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}
