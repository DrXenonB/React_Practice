import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  color: ${(props) => (props.active ? "red" : "black")};
  border: 1px solid black;
  margin-top: -1px;
  border-radius: 2px;
  width: 10%;

  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  items: string[];
  onSelectItem: (item: string) => void; // passing a function as a prop
}

function ListGroup({ items, onSelectItem }: Props) {
  //hook
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <List>
        {items.length === 0 && <p>No items</p>}
        {items.map((item, index) => (
          <ListItem
            active={selectedItem === index}
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
