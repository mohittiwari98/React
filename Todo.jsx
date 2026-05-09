import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "40px 20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    },
    card: {
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      padding: "32px",
      width: "100%",
      maxWidth: "480px"
    },
    title: {
      margin: "0 0 24px 0",
      fontSize: "28px",
      fontWeight: "700",
      color: "#1a202c",
      textAlign: "center"
    },
    form: {
      display: "flex",
      gap: "8px",
      marginBottom: "24px"
    },
    input: {
      flex: 1,
      padding: "12px 16px",
      border: "2px solid #e2e8f0",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      transition: "border 0.2s"
    },
    button: {
      padding: "12px 24px",
      background: "#667eea",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "transform 0.1s, background 0.2s"
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    item: {
      background: "#f7fafc",
      padding: "14px 16px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "transform 0.2s, box-shadow 0.2s"
    },
    deleteBtn: {
      background: "#fc8181",
      color: "white",
      border: "none",
      borderRadius: "6px",
      padding: "6px 12px",
      fontSize: "13px",
      cursor: "pointer"
    },
    empty: {
      textAlign: "center",
      color: "#a0aec0",
      padding: "20px 0"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Todo List</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Add your new todo"
            style={styles.input}
            onFocus={(e) => e.target.style.borderColor = "#667eea"}
            onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
          />
          <button 
            type="submit" 
            style={styles.button}
            onMouseDown={(e) => e.target.style.transform = "scale(0.95)"}
            onMouseUp={(e) => e.target.style.transform = "scale(1)"}
          >
            Add
          </button>
        </form>
        <ul style={styles.list}>
          {todos.length === 0 ? (
            <li style={styles.empty}>No todos yet. Add one above!</li>
          ) : (
            todos.map((todo) => (
              <li 
                key={todo.id} 
                style={styles.item}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span>{todo.text}</span>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
      }
