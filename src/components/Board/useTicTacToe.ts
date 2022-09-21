import type { BoardSquareValues } from "./interfaces";

import { useEffect, useState } from "react";

import { useScore } from "../Score";

import { isGameOver, isWinner } from "@utilities/ticTacToe";

const createNewTicTacToeBoard = () => Array(9).fill(null);

export const useTicTacToe = () => {
  const [board, setBoard] = useState<BoardSquareValues[]>(
    createNewTicTacToeBoard
  );

  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<BoardSquareValues>(null);
  const currentTurn: NonNullable<BoardSquareValues> = isX ? "X" : "O";

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
