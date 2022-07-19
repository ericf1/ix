import React from "react";

export default function BookTable({ library, setLibrary }) {
  function removeBook(e) {
    setLibrary((prevLibrary) =>
      prevLibrary.filter((b) => {
        return String(b.id) !== e.target.id;
      })
    );
  }
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>#ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {library.map((book) => {
          return (
            <tr key={book.id}>
              <th scope="row">{book.title}</th>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <button id={book.id} onClick={removeBook} className="btn">
                  <i id={book.id} className="bi bi-x text-primary"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
