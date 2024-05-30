import { useState } from "react";
import Alert from "./Components/alert";
import Button from "./Components/button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World!</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click Me</Button>
    </>
  );
}

export default App;
