import React, { createContext, useState, useEffect } from "react";
import data from "./data.json";

const STORAGE_KEY = "book_list";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setBooks(parsed);
        return;
      }
    }
    setBooks(data);
  }, []);

  useEffect(() => {
    if (books.length === 0) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  const addBook = (option) => {
    setBooks((prev) => [...prev, { option }]);
  };

  const removeBook = (optionToRemove) => {
    setBooks((prev) => prev.filter((f) => f.option !== optionToRemove));
  };

  return (
    <BooksContext.Provider
      value={{ books, addBook, removeBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};

