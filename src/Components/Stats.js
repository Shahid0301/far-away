export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? `You have Packed everything on your list`
        : `
      You have ${numItem} items on your list, and you packed ${numPacked}
     (${percentage}%)`}
    </footer>
  );
}
