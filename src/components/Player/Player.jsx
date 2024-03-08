import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
        

    }

    const changePlayerName = (event) => {
       setPlayerName(event.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {!isEditing?<span className="player-name">{playerName}</span>: <input type="text" onChange={changePlayerName} required value={playerName} />}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEditing? 'Save' : 'Edit'}</button>
          </li>
    );
}