import { useState } from "react";
import "./App.css";
import Button from "./Components/button";
import ListGroup from "./Components/listGroup";

function App() {
  const [tags, setTags] = useState(["Happy", "Cheerful", "Lazy"]);

  const handleClick = () => {
    //Add
    // setTags([...tags, "Exiting"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "Cheerful"));

    //Update
    // setTags(tags.map((tag) => (tag === "Happy" ? "Happiness" : tag)));
  };

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
      <ListGroup items={tags} onSelectItem={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
