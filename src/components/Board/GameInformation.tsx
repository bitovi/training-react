import type { BoardSquareValues } from "./interfaces";

import styles from "./GameInformation.module.css";

interface GameInformationProps {
  isGameOver: boolean;
  winner: BoardSquareValues;
  currentTurn: BoardSquareValues;
  reset: () => void;
}

const GameInformation = ({
  isGameOver,
  winner,
  currentTurn,
  reset,
}: GameInformationProps) => {
  const showGameOver = isGameOver && !winner;

  return (
    <>
      {showGameOver && <h2>Game Over</h2>}
      {winner && <h2>{winner} wins!</h2>}
      <div className={styles.informationContainer}>
        <p className={styles.turnInformation}>{currentTurn}'s turn</p>
        <button onClick={() => reset()}>Reset Game</button>
      </div>
    </>
  );
};

export default GameInformation;
