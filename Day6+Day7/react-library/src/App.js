import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";
import { Book } from "./models/book";

function App() {
  const [library, setLibrary] = useState([]);

  return (
    <div className="container mt-4">
      <h1>Add Book:</h1>
      <BookInput setLibrary={setLibrary}></BookInput>
      <BookTable setLibrary={setLibrary} library={library}></BookTable>
    </div>
  );
}

export default App;
