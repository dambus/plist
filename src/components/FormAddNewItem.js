import { useState } from "react";
export default function FormAddNewItem({ onAddItem, setOpenModal }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
    setOpenModal(false);
  }
  return (
    <>
      <h3 className="form-heading">What do you need for your trip?</h3>
      <form className="form-add" action="" onSubmit={handleSubmit}>
        <label htmlFor="num-items">How many?</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          id="num-items"
          placeholder="how many items"
        />
        <label htmlFor="item-name">Of what?</label>

        <input
          type="text"
          placeholder="Item name..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="item-name"
        />
        <button type="submit" className="btn-add-item">
          add item
        </button>
      </form>
    </>
  );
}
