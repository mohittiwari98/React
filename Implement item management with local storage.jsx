import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved? JSON.parse(saved) : [];
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return alert("Please enter an item first");

    if (editId) {
      setItems(items.map(item =>
        item.id === editId? {...item, title: inputValue } : item
      ));
      setEditId(null);
    } else {
      setItems([...items, { id: Date.now(), title: inputValue }]);
    }
    setInputValue("");
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id!== id));
  };

  const editItem = (id) => { // Fixed: bracket was closing too early
    const item = items.find(item => item.id === id);
    setInputValue(item.title);
    setEditId(id);
  }; // This brace was in wrong place before

  return (
    <div className="container">
      <h1 className="heading">Item Details</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn-submit">
          {editId? "Update" : "Add"}
        </button>
      </form>

      {items.length === 0? (
        <p className="empty">List is empty bro</p>
      ) : (
        <div className="list">
          {items.map(({ id, title }) => (
            <div key={id} className="list-item">
              <span className="item-title">{title}</span>
              <div className="btn-group">
                <button
                  onClick={() => editItem(id)} // Fixed: was editId(id)
                  className="btn-edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeItem(id)}
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={() => setItems([])}
            className="btn-clear"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
