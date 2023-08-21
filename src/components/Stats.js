export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
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
      {/* <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em> */}
    </footer>
  );
}
