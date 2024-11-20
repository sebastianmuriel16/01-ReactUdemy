function TabButton({ children, onSelect, isSelected }) {
  const selectedClass = isSelected ? "active" : "";
  return (
    <li>
      <button className={selectedClass} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
export { TabButton };
