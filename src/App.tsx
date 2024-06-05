import { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Cart from "./Components/cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const handleClick = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClick} />
    </div>
  );
}

export default App;
