import { useState } from "react";
import { Logo } from "./Logo";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import FormNew from "./FormNew";
import Modal from "./Modal";

export default function App() {
  const [items, setItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }

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

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      {modalIsOpen && (
        <Modal onCloseModal={setModalIsOpen}>
          <Form onAddItems={handleAddItems} setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      <div className="Logo">
        <Logo />
      </div>
      <FormNew onOpenModal={handleOpenModal} />

      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
