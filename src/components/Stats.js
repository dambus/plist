export function Stats({ items, setOpenModal }) {
  if (!items.length)
    return (
      <>
        <footer className="stats">
          <ButtonAddBase setOpenModal={setOpenModal} />
          <em>Start adding some items to your packing list</em>
        </footer>
      </>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {/* <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em> */}
      <div className="footer-left">
        <span className="number">{numItems}</span>
        <br />
        <span>Items on list</span>
      </div>
      <div className="footer-right">
        <span className="number">{numPacked}</span>
        <br />
        <span>{`packed, thats ${percentage}%`}</span>
      </div>

      <ButtonAddBase setOpenModal={setOpenModal} />
    </footer>
  );
}

function ButtonAddBase({ setOpenModal }) {
  return (
    <button onClick={() => setOpenModal(true)} className="btn-add-base">
      +add
    </button>
  );
}
