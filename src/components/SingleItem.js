export default function SingleItem({ item, onDeleteitem, onToggleItem }) {
  return (
    <li className="single-item">
      <div className="item-info-left" onClick={() => onToggleItem(item.id)}>
        <span
          className="marked"
          style={item.packed ? { display: "block" } : { display: "none" }}
        ></span>
        <span
          className="quantity"
          style={
            item.packed ? { backgroundColor: "#f6f4eb", color: "#91c8e4" } : {}
          }
        >
          {item.quantity}
        </span>
        <span
          className="description"
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          {item.description}
        </span>
      </div>
      <div className="item-tools-right">
        <button
          onClick={() => {
            onDeleteitem(item.id);
          }}
        >
          🗑
        </button>
      </div>
    </li>
  );
}
