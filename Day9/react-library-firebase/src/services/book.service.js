import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  getDocs,
} from "firebase/firestore";

import { firestore } from "../firebase/firebase";
import { Book } from "../models/book";

class BookService {
  async createBook(book) {
    const collectionReference = collection(firestore, "library");
    const docRef = await addDoc(collectionReference, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    });
    book.id = docRef.id;
    return book;
  }
  async readLibrary() {
    const collectionReference = collection(firestore, "library");
    const q = query(collectionReference);
    const querySnapshot = await getDocs(q);
    let books = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      books.push(new Book(doc.id, data.title, data.author, data.isbn));
    });
    return books;
  }
  async updateBook() {}
  async deleteBook(id) {
    const docRef = doc(firestore, "library", id);
    await deleteDoc(docRef);
  }
}

const service = new BookService();
export default service;
