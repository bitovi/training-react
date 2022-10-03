import type { BoardSquareValue, Board, Player } from "@utilities/ticTacToe";

import { useEffect, useState } from "react";

import { useScore } from "../Score";

import { isGameOver, isWinner } from "@utilities/ticTacToe";

const createNewTicTacToeBoard = () => Array(9).fill(null);

export const useTicTacToe = () => {
  const { addWinX, addWinO } = useScore();

  const [board, setBoard] = useState<Board>(createNewTicTacToeBoard);

  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<BoardSquareValue>(null);
  const currentTurn: Player = isX ? "X" : "O";
  const updateWinCount = currentTurn == "X" ? addWinX : addWinO;

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
      updateWinCount();
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
