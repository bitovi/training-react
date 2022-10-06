import Square from "./Square";

import styles from "./Board.module.css";
import { useTicTacToe } from "./useTicTacToe";

const Board = () => {
  const { board, handleSquareSelect } = useTicTacToe();

  return (
    <div className={styles.board}>
      {board.map((squareValue, index) => (
        <Square
          key={index}
          value={squareValue}
          onSquareSelect={() => handleSquareSelect(index)}
        />
      ))}
    </div>
  );
};

export default Board;
