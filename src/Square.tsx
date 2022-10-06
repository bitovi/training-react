import type { BoardSquareValue } from "@utilities/ticTacToe";

interface SquareProps {
  value: BoardSquareValue;
}

const squareStyles = {
  height: "150px",
  width: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "5em",
  backgroundColor: "hsl(8, 92.8%, 91%)",
};

const Square = ({ value }: SquareProps) => {
  return <div style={squareStyles}>{value}</div>;
};

export default Square;
