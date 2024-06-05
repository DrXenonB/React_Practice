import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setcart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    //Sets the first items quantity to 2
    setcart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <div className="app">
      <h3>Cart</h3>
      <ul>
        {cart.items.map((item) => (
          <li>
            {item.title} /quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
