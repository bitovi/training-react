import type { TicTacToeBoard, Player } from "@utilities/ticTacToe";

import { useCallback, useEffect, useState } from "react";

import { isWinner } from "@utilities/ticTacToe";

import Square from "./Square";

import styles from "./Board.module.css";

const initialBoard = Array(9).fill(null);

const Board = () => {
  const [board, setBoard] = useState<TicTacToeBoard>(initialBoard);
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<Player>();

  const currentTurn = isX ? "X" : "O";

  const handleSquareSelect = useCallback(
    (selectedSquare: number) => {
      if (board[selectedSquare]) {
        return;
      }

      const newBoard = [...board];
      newBoard[selectedSquare] = currentTurn;

      if (isWinner(currentTurn, newBoard)) {
        setWinner(currentTurn);
      }

      setBoard(newBoard);
      setIsX(!isX);
    },
    [board, isX]
  );

  useEffect(() => {
    if (!winner) {
      return;
    }

    alert(`${winner} has won the game`);
  }, [winner]);

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
