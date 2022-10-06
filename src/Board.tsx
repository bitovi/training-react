import type { TicTacToeBoard } from "@utilities/ticTacToe";

import { useState } from "react";

import Square from "./Square";

import styles from "./Board.module.css";

const initialBoard = Array(9).fill(null);

const Board = () => {
  const [board, setBoard] = useState<TicTacToeBoard>(initialBoard);
  const [isX, setIsX] = useState(true);

  const handleSquareSelect = (selectedSquare: number) => {
    if (board[selectedSquare]) {
      return;
    }

    const newBoard = [...board];
    newBoard[selectedSquare] = isX ? "X" : "O";

    setBoard(newBoard);
    setIsX(!isX);
  };

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
