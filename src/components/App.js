import { useEffect, useState } from "react";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Modal from "./Modal";
import FormAddNewItem from "./FormAddNewItem";
import { Stats } from "./Stats";
import PackList from "./PackList";

export default function App() {
  // Populating list items from local storage on app reload
  const [items, setItems] = useState(() => {
    const recItems = JSON.parse(localStorage.getItem("items"));
    if (recItems) {
      return recItems;
    } else {
      return [];
    }
  });
  const [openModal, setOpenModal] = useState(false);
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  // adding current list items to local storage on every "items" array change
  useEffect(
    function () {
      localStorage.setItem("items", JSON.stringify(items));
    },
    [items]
  );

  // handler functions
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

          <Stats items={items} setOpenModal={setOpenModal} />
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
