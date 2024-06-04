import styles from "./styledButton.module.css";

interface Props {
  children: string;
  onClick: () => void;
}

const StyledButton = (props: Props) => {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default StyledButton;
