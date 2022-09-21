import Square from "./Square";
import { useTicTacToe } from "./useTicTacToe";

import styles from "./Board.module.css";
import GameInformation from "./GameInformation";
import { ComponentProps } from "react";

const Board = () => {
  const { board, handleSquareSelect, reset, currentTurn, winner, isGameOver } =
    useTicTacToe();

  return (
    <div>
      <GameInformation
        isGameOver={isGameOver}
        winner={winner}
        currentTurn={currentTurn}
        reset={reset}
      />
      <div className={styles.board}>
        {board.map((value, squareIndex) => (
          <Square
            key={squareIndex}
            value={value}
            onSquareSelect={() => handleSquareSelect(squareIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
