function ListGroup() {
  const items = ["First item", "Second item", "Third item", "Fourth item"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
