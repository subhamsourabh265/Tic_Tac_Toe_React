export default function GameBoard({ selectSquare, board, winnerBoxes }) {
  const getStyle = (row, col) => {
    if (winnerBoxes && winnerBoxes.first) {
      if (
        (row === winnerBoxes["first"][0] && col === winnerBoxes["first"][1]) ||
        (row === winnerBoxes["second"][0] &&
          col === winnerBoxes["second"][1]) ||
        (row === winnerBoxes["third"][0] && col === winnerBoxes["third"][1])
      ) {
        return {
          background: "#fbfb20",
        };
      }
    }
  };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  style={getStyle(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                  onClick={() => selectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
