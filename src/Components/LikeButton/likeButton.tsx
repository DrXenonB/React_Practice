import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import styles from "./likeButton.module.css";

interface Props {
  onClick: () => void;
}

const LikeButton = (props: Props) => {
  const [btnStatus, setBtnStatus] = useState(false);
  const btnSize = 24;

  const condition = btnStatus ? (
    <BsHeartFill color="red" size={btnSize} />
  ) : (
    <BsHeart size={btnSize} />
  );

  return (
    <button
      className={styles.btn}
      onClick={() => {
        setBtnStatus(!btnStatus);
        props.onClick();
      }}
    >
      {condition}
    </button>
  );
};

export default LikeButton;
