import { useState } from "react";

function ListGroup() {
  const items = ["First item", "Second item", "Third item", "Fourth item"];

  //hook
  const [selectedItem, setSelectedItem] = useState(-1);

  //event handler
  const handleClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <>
      <ul className="list-group">
        {items.length === 0 && <p>No items</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
