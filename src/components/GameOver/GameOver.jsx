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
  if (noOfWins?.X + noOfWins?.O + noOfWins?.draw >= noOfWins?.max - 1) {
    tournamentCompleted = true;
  }

  if (tournamentCompleted) {
    if (winnerSymbol === "X") {
      const winX = noOfWins.X + 1;
      if (winX === noOfWins.O) {
        tournamentResult = `${noOfWins?.max} Match ka Series Draw ho Gaya re babu!`;
      } else if (winX > noOfWins.O) {
        tournamentResult = (
          <>
            <span className="player">{players.X}</span> {noOfWins?.max} Match ka
            series Jeet Gaya!<br /> Badhai Ho{" "}
            <span className="player">{players?.X}</span>! &#127881; &#127881;
          </>
        );
      } else if (winX < noOfWins.O) {
        tournamentResult = (
          <>
            <span className="player">{players.O}</span> {noOfWins?.max} Match ka
            series Jeet Gaya!<br /> Badhai Ho{" "}
            <span className="player">{players.O}</span>! &#127881; &#127881;
          </>
        );
      }
    } else {
      const winO = noOfWins.O + 1;
      if (winO === noOfWins.X) {
        tournamentResult = `${noOfWins?.max} Match ka Series Draw ho Gaya re babu!`;
      } else if (winO > noOfWins.X) {
        tournamentResult = (
          <>
            <span className="player">{players.O}</span> {noOfWins?.max} Match ka
            series Jeet Gaya!<br /> Badhai Ho{" "}
            <span className="player">{players.O}</span>! &#127881; &#127881;
          </>
        );
      } else if (winO < noOfWins.X) {
        tournamentResult = (
          <>
            <span className="player">{players.X}</span> {noOfWins.max} Match ka
            series Jeet Gaya!<br /> Badhai Ho{" "}
            <span className="player">{players.X}</span>! &#127881; &#127881;
          </>
        );
      }
    }
  }

  return (
    <div id="game-over" style={tournamentCompleted ? {backgroundColor: 'rgb(0 91 49 / 90%)'}: null}>
      <h2>{tournamentCompleted ? `Series Khatam!` : `Game Khatam`}!</h2>
      {!tournamentCompleted ? (
        <>
          {winner && (
            <p>
              <span className="player">{winner}</span>{" "}
              {noOfWins?.[winnerSymbol] + 1
                ? `${noOfWins?.[winnerSymbol] + 1} Match`
                : null}{" "}
              Jeet Gaya, Ab Tera Kya Hoga Re{" "}
              <span className="player">{looser}</span>!
            </p>
          )}
          {!winner && <p>Arrey yaar! DRAW ho gaya, Ab Kya Hoga &#128530;</p>}
        </>
      ) : (
        <p>{tournamentResult}</p>
      )}

      <p>
        <button onClick={onRestart}>{tournamentCompleted ? `Series Fir Se Start Karna Hai` : `Game Fir se Start Karna Hai`} &#128582; ? </button>
      </p>
    </div>
  );
}
