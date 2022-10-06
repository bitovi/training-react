import type { TicTacToeBoard, Player } from "@utilities/ticTacToe";

import { useCallback, useEffect, useState } from "react";

import { isWinner } from "@utilities/ticTacToe";

const initialBoard = Array(9).fill(null);

export const useTicTacToe = () => {
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

  return {
    board,
    handleSquareSelect,
  };
};
