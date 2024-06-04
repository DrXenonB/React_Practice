import { useState } from "react";
import StyledButton from "./Components/StyledButton";
import { produce } from "immer";
import "./App.css";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div className="app">
      <StyledButton onClick={handleClick}>Click</StyledButton>

      {bugs.map((bug) => (
        <div>
          Bug {bug.id} {bug.fixed ? "fixed" : "new"}
        </div>
      ))}
    </div>
  );
}

export default App;
