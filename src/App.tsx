import Message from "./Components/message";
import ListGroup from "./Components/listGroup";

function App() {
  let listArray = ["First Item", "Second Item", "Third Item"];

  return (
    <>
      <Message>Hello!</Message>
      <ListGroup
        items={listArray}
        onSelectItem={() => console.log("Clicked!")}
      />
    </>
  );
}

export default App;
