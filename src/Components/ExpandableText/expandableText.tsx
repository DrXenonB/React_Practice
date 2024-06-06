import { useState } from "react";
import styles from "./expandableText.module.css";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ maxChars = 100, children }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const sentence = isCollapsed ? children.slice(0, maxChars) + "..." : children;

  return (
    <>
      <div className={styles.container}>
        {sentence}
        <button
          className={styles.btn}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "More" : "Less"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
