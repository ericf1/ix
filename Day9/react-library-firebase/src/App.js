import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";
import bookService from "./services/book.service";

function App() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const library = await bookService.readLibrary();
      setLibrary(library);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container mt-4">
      <h1>Add Book:</h1>
      <BookInput setLibrary={setLibrary} bookService={bookService} />
      <BookTable
        setLibrary={setLibrary}
        library={library}
        bookService={bookService}
      />
    </div>
  );
}

export default App;
