import { useState } from "react";
import StyledButton from "./Components/StyledButton";
import "./App.css";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div className="app">
      <StyledButton onClick={handleClick}>Click</StyledButton>
      <div>
        {bugs[0].title} fixed: {String(bugs[0].fixed)}
      </div>
      <div>
        {bugs[1].title} fixed: {String(bugs[1].fixed)}
      </div>
    </div>
  );
}

export default App;
