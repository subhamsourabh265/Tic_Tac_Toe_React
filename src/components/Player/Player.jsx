import { useRef, useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const inputRef = useRef(null);

  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  const clickHandler = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const changePlayerName = (event) => {
    setPlayerName(event.target.value);
  };

  const handleKeyUp = (event) => {
    setIsEditing(false);
    onChangeName(symbol, playerName);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span onClick={clickHandler} className="player-name">
            {playerName}({symbol})
          </span>
        ) : (
          <input
            ref={inputRef}
            type="text"
            onChange={changePlayerName}
            onBlur={handleKeyUp}
            required
            value={playerName}
          />
        )}
      </span>
    </li>
  );
}
