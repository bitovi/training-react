import type {
  TicTacToeBoard,
  BoardSquareValue,
  Player,
} from "@utilities/ticTacToe";

import { useEffect, useState } from "react";

import { isGameOver, isWinner } from "@utilities/ticTacToe";

const createNewTicTacToeBoard = () => Array(9).fill(null);

export const useTicTacToe = () => {
  const [board, setBoard] = useState<TicTacToeBoard>(createNewTicTacToeBoard);

  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<BoardSquareValue>(null);
  const currentTurn: Player = isX ? "X" : "O";

  useEffect(() => {
    if (!winner) return;
  }, [winner]);

  const handleSquareSelect = (selectedSquare: number) => {
    if (board[selectedSquare] || !!winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[selectedSquare] = isX ? "X" : "O";

    if (isWinner(currentTurn, newBoard)) {
      setWinner(currentTurn);
    }

    setBoard(newBoard);
    setIsX((previousIsXValue) => !previousIsXValue);
  };

  const reset = () => {
    setBoard(createNewTicTacToeBoard());
    setIsX(true);
    setWinner(null);
  };

  return {
    board,
    handleSquareSelect,
    reset,
    currentTurn,
    winner,
    isGameOver: isGameOver(board),
  };
};
