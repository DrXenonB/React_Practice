import ListGroup from "./Components/listGroup";
import Message from "./Components/message";

function App() {
  let list1Items = ["First item", "Second item", "Third item", "Fourth item"];

  return (
    <>
      <Message heading="Hello World!.." />
      <ListGroup
        items={list1Items}
        onSelectItem={(item: string) => console.log(item)}
      />
    </>
  );
}

export default App;
