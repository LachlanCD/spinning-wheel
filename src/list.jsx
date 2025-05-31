import React, { useContext, useState } from "react";
import { BooksContext } from "./BooksContext";

const NameList = () => {
  const { books, addBook, removeBook } = useContext(BooksContext)
  const [newOption, setNewOption] = useState("");

  const handleAdd = () => {
    const trimmed = newOption.trim();
    if (!trimmed) return; // ignore empty

    // Add new option
    addBook(trimmed);
    setNewOption(""); // Clear input
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {books.map((item, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {item.option} <button onClick={() => removeBook(item.option)}>Remove</button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "16px" }}>
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add a new book"
          style={{ padding: "8px", fontSize: "16px", width: "250px", marginRight: "8px" }}
        />
        <button onClick={handleAdd} disabled={!newOption.trim()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NameList;

