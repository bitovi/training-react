import type { BoardSquareValues } from "./interfaces";

import styles from "./Square.module.css";

interface BoardSquareProps {
  onSquareSelect: () => void;
  value: BoardSquareValues;
}

const Square = ({ onSquareSelect, value }: BoardSquareProps) => {
  return (
    <div className={styles.square} onClick={() => onSquareSelect()}>
      {value}
    </div>
  );
};

export default Square;
