import Square from "./Square";

import styles from "./Board.module.css";

const board = Array(9).fill(null);

const Board = () => {
  return (
    <div className={styles.board}>
      {board.map((squareValue) => (
        <Square key={squareValue} value={squareValue} />
      ))}
    </div>
  );
};

export default Board;
