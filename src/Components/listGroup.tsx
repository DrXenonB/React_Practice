import { useState } from "react";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void; // passing a function as a prop
}

function ListGroup({ items, onSelectItem }: Props) {
  //hook
  const [selectedItem, setSelectedItem] = useState(-1);

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
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
