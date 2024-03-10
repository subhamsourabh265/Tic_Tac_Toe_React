import "./GameOver.css";

export default function GameOver({
  winner,
  looser,
  noOfWins,
  winnerSymbol,
  players,
  onRestart,
}) {
  let tournamentCompleted = false;
  let tournamentResult;
  if (noOfWins?.X + noOfWins?.O >= noOfWins.max - 1) {
    tournamentCompleted = true;
  }

  if (tournamentCompleted) {
    if (winnerSymbol === "X") {
      const winX = noOfWins.X + 1;
      if (winX === noOfWins.O) {
        tournamentResult = `${noOfWins.max} Match ka Series Draw ho Gaya re babu!`;
      } else if (winX > noOfWins.O) {
        tournamentResult = (
          <>
            <span className="player">{players.X}</span> {noOfWins.max} Match ka
            series Jeet Gaye Hain, Congratulations{" "}
            <span className="player">{players.X}</span>!
          </>
        );
      } else if (winX < noOfWins.O) {
        tournamentResult = (
          <>
            <span className="player">{players.O}</span> {noOfWins.max} Match ka
            series Jeet Gaye Hain, Congratulations{" "}
            <span className="player">{players.O}</span>!
          </>
        );
      }
    } else {
      const winO = noOfWins.O + 1;
      if (winO === noOfWins.X) {
        tournamentResult = `${noOfWins.max} Match ka Series Draw ho Gaya re babu!`;
      } else if (winO > noOfWins.X) {
        tournamentResult = (
          <>
            <span className="player">{players.O}</span> {noOfWins.max} Match ka
            series Jeet Gaye Hain, Congratulations{" "}
            <span className="player">{players.O}</span>!
          </>
        );
      } else if (winO < noOfWins.X) {
        tournamentResult = (
          <>
            <span className="player">{players.X}</span> {noOfWins.max} Match ka
            series Jeet Gaye Hain, Congratulations{" "}
            <span className="player">{players.X}</span>!
          </>
        );
      }
    }
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {!tournamentCompleted ? (
        <>
          {winner && (
            <p>
              <span className="player">{winner}</span>{" "}
              {noOfWins[winnerSymbol] + 1
                ? `${noOfWins[winnerSymbol] + 1} Match`
                : null}{" "}
              Jeet Gaya, Ab Tera Kya Hoga Re{" "}
              <span className="player">{looser}</span> Kaliya!
            </p>
          )}
          {!winner && <p>Draw huwa re kaliya!</p>}
        </>
      ) : (
        <p>{tournamentResult}</p>
      )}

      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
