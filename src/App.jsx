import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver/GameOver";
import Dropdown from "./components/DropDown/DropDown";
import PopUp from "./components/PopUp/PopUp";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: "OMEE LAL",
    O: "MAHI LAL",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const [winCount, setWinCount] = useState({
    X: 0,
    O: 0,
    draw: 0,
    max: 0,
    showWarning: false
  });

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;
  let looser;
  const noOfWins = {
    X: 0,
    O: 0,
  };
  let winnerBoxes;
  let winnerSymbol;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
      winnerSymbol = firstSquareSymbol;
      looser = players[firstSquareSymbol === "X" ? "O" : "X"];
      // looserSymbol = firstSquareSymbol === 'X' ? 'O' : 'X';
      noOfWins[firstSquareSymbol] = noOfWins[firstSquareSymbol] + 1;
      winnerBoxes = {
        first: [combination[0].row, combination[0].col],
        second: [combination[1].row, combination[1].col],
        third: [combination[2].row, combination[2].col],
      };
    } else {
      
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const changlePlayer = (row, col) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {
            row,
            col,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
    setWinCount(prev => {
      if (prev?.max === 0) {
        return ({
          ...prev,
          showWarning: true
        });
      }
      return ({
        ...prev,
        showWarning: false
      });
    });
  };

  const handleRestart = (winnerSymbol) => {
    setGameTurns([]);
    setWinCount((prevCount) => {
      let updatedState = {...prevCount};
      if (updatedState.X + updatedState.O + updatedState.draw >= (updatedState?.max - 1)) {
        updatedState = {
          ...updatedState,
          X: 0,
          O: 0,
          draw:0
        };
        return updatedState;
      }

      if(hasDraw) {
        updatedState =  {
          ...updatedState,
          'draw': updatedState['draw'] + 1
        }
      }

      updatedState = {
        ...updatedState,
        [winnerSymbol]: updatedState[winnerSymbol] + 1,
      };
      return updatedState;
    });
  };

  const selectMatch = (value) => {
    setGameTurns([]);
    setWinCount(() => ({
      X: 0,
      O: 0,
      draw: 0,
      max: value,
      showWarning: false
    }));
  };

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  function hidePopup() {
    setGameTurns([]);
    setWinCount(prevCount => ({
      ...prevCount,
      showWarning: false
    }));
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="OMEE LAL"
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              initialName="MAHI LAL"
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          <Dropdown selectMatch={selectMatch} />
          {(winner || hasDraw) && (
            <GameOver
              winner={winner}
              winnerSymbol={winnerSymbol}
              looser={looser}
              noOfWins={winCount}
              players={players}
              onRestart={() => handleRestart(winnerSymbol)}
            />
          )}
          <GameBoard
            selectSquare={changlePlayer}
            board={gameBoard}
            winnerBoxes={winnerBoxes}
          />
        </div>
        {!!(winCount.X || winCount.O || winCount.draw) && <Log players={players} noOfWins={winCount} />}
      </main>
      {(winCount?.showWarning) ? <PopUp players={players} hidePopup={hidePopup} /> : null}
    </>
    
  );
}

export default App;
