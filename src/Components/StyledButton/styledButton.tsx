import styles from "./styledButton.module.css";

interface Props {
  children: string;
}

const StyledButton = ({ children }: Props) => {
  return <button className={styles.btn}>{children}</button>;
};

export default StyledButton;
