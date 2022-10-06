import type { BoardSquareValue } from "@utilities/ticTacToe";

import styles from "./Square.module.css";

interface SquareProps {
  onSquareSelect: () => void;
  value: BoardSquareValue;
}

const Square = ({ value, onSquareSelect }: SquareProps) => {
  return (
    <div className={styles.square} onClick={() => onSquareSelect()}>
      {value}
    </div>
  );
};

export default Square;
