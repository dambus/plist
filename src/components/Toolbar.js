import { useState } from "react";
import addBtn from "../images/Add.svg";
import sortBtn from "../images/Sort.svg";

export default function Toolbar({ setOpenModal, sortBy, setSortBy }) {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="toolbar">
      <button
        className="toolbar-btn"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <img src={sortBtn} alt="" />
      </button>
      <button className="toolbar-btn" onClick={() => setOpenModal(true)}>
        <img src={addBtn} alt="" />
      </button>
      {menuOpened && (
        <div className="sort-menu">
          <select
            value={sortBy}
            onChange={function (e) {
              setSortBy(e.target.value);
              setMenuOpened(false);
            }}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
        </div>
      )}
    </div>
  );
}
