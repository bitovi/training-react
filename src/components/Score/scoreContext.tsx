import React, { createContext, useCallback, useContext, useState } from "react";

interface ScoreContext {
  xWins: number;
  oWins: number;
  addWinX: () => void;
  addWinO: () => void;
}

export const ScoreContext = createContext<ScoreContext | null>(null);

export const useScore = () => {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error("Cannot use useScore outside of the ScoreProvider");
  }

  return context;
};

export const StoreContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);

  const addWinX = useCallback(() => setXWins((old) => old + 1), []);
  const addWinO = useCallback(() => setOWins((old) => old + 1), []);

  return (
    <ScoreContext.Provider
      value={{
        xWins,
        oWins,
        addWinX,
        addWinO,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
