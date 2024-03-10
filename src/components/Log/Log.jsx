import "./Log.css";

export default function Log({ players, noOfWins }) {
  console.log(noOfWins);

  return (
    <section id="log">
      {players?.X && noOfWins?.X ? (
        <p>
          <span className="player-names">{players.X}</span> {noOfWins?.X} match
          Jeet Gaya!
        </p>
      ) : (
        <p>
          <span className="player-names">{players.X}</span> Ek Bhi Match Abhi
          Tak Nahi Jeeta Hai!
        </p>
      )}
      {players?.O && noOfWins?.O ? (
        <p>
          <span className="player-names">{players.O}</span> {noOfWins?.O} match
          Jeet Gaya!
        </p>
      ) : (
        <p>
          <span className="player-names">{players.O}</span> Ek Bhi Match Abhi
          Tak Nahi Jeeta Hai!
        </p>
      )}
      {noOfWins?.draw ? (
        <p>
          {noOfWins.draw} Match Draw vi huwa hai babu!
        </p>
      ) : null}
    </section>
  );
}
