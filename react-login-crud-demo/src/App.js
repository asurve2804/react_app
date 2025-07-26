import React, { useState } from "react";

const VALID_USER = {
  email: "atul",
  password: "admin123",
};

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Login Handler
  const handleLogin = () => {
    if (email === VALID_USER.email && password === VALID_USER.password) {
      setUser({ email });
      setLoginError("");
    } else {
      setLoginError("Invalid credentials.");
    }
  };

  // Item Handlers
  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleEdit = (index) => {
    setNewItem(items[index]);
    setEditingIndex(index);
  };

  const handleUpdate = () => {
    if (editingIndex !== null) {
      const updated = [...items];
      updated[editingIndex] = newItem;
      setItems(updated);
      setNewItem("");
      setEditingIndex(null);
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleLogout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
    setItems([]);
  };

  if (!user) {
    return (
      <div className="p-6 max-w-sm mx-auto">
        <h1 className="text-xl mb-4">Login</h1>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleLogin}
        >
          Login
        </button>
        {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl mb-4">Welcome, {user.email}</h1>
      <button onClick={handleLogout} className="mb-4 bg-gray-400 px-2 py-1">
        Logout
      </button>

      <div className="mb-4">
        <input
          className="border p-2 mr-2 w-2/3"
          placeholder="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        {editingIndex === null ? (
          <button
            className="bg-green-500 px-2 py-1 text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        ) : (
          <button
            className="bg-yellow-500 px-2 py-1 text-white"
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between border p-2">
            <span>{item}</span>
            <div className="space-x-2">
              <button
                className="bg-blue-400 px-2 py-1 text-white"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-2 py-1 text-white"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Assertion area */}
      <div className="mt-6 text-sm text-gray-600">
        {items.length === 0 && "No items. Add one!"}
        {items.length > 0 && `Total items: ${items.length}`}
      </div>
    </div>
  );
}
