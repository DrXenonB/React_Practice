import { MouseEvent } from "react";

function ListGroup() {
  const items = ["First item", "Second item", "Third item", "Fourth item"];

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <ul className="list-group">
        {items.length === 0 && <p>No items</p>}
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
