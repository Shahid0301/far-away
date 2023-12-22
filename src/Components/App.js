import { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function clearAll() {
    const confirmed = window.confirm(
      "Are you sure your want to delete all items"
    );
    if (confirmed) setItems([]);
  }
  function onToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={onToggle}
        clearAll={clearAll}
      />
      <Stats items={items} />
    </div>
  );
}
function Logo() {
  return <h1>Far Away💼</h1>;
}
