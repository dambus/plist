import SingleItem from "./SingleItem";

export default function PackList({
  onToggleItem,
  onDeleteItem,
  sortedItems,
  sortBy,
  items,
}) {
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
