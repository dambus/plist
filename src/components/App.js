import { useState } from "react";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Modal from "./Modal";
import SingleItem from "./SingleItem";
import FormAddNewItem from "./FormAddNewItem";

export default function App() {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    const confirmed = window.confirm("Really want to delete this item?");
    if (confirmed) setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <div className="app-wrapper">
        <div className="main-content">
          <Header />
          <Toolbar
            setOpenModal={setOpenModal}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <PackList
            sortedItems={sortedItems}
            sortBy={sortBy}
            items={items}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
          <Stats />
        </div>
        <Modal
          onAddItem={handleAddItems}
          btnContent={"cancel"}
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <FormAddNewItem
            onAddItem={handleAddItems}
            setOpenModal={setOpenModal}
          />
        </Modal>
      </div>
    </>
  );
}

function Stats() {
  return (
    <div className="stats">
      <h3>Stats</h3>
    </div>
  );
}

function PackList({ onToggleItem, onDeleteItem, sortedItems, sortBy, items }) {
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <ul className="item-list">
      {sortedItems.map((item) => (
        <SingleItem
          item={item}
          key={item.id}
          onToggleItem={onToggleItem}
          onDeleteitem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
