import type { BoardSquareValue } from "@utilities/ticTacToe";

import styles from "./Square.module.css";

interface SquareProps {
  value: BoardSquareValue;
}

const Square = ({ value }: SquareProps) => {
  return <div className={styles.square}>{value}</div>;
};

export default Square;
