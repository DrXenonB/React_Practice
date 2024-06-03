import { useState } from "react";
import "./App.css";

function App() {
  /* For Best Practices avoid deeply nested objects */
  const [customer, setCustomer] = useState({
    name: "John",
    adress: {
      city: "Lunuwila",
      zipCode: 61118,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      adress: { ...customer.adress, zipCode: 61115 },
    });
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
