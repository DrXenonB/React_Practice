import { useState } from "react";
import styles from "./updateDrink.module.css";

const UpdateDrink = () => {
  const [drink, setDrink] = useState({
    title: "Amaricano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: 7,
    };
    setDrink(newDrink);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <button className={styles.btn} onClick={handleClick}>
          Update
        </button>
        <div className={styles.price}>{drink.price}</div>
      </div>
    </div>
  );
};

export default UpdateDrink;
