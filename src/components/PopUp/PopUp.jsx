import './PopUp.css';

export default function PopUp({players, hidePopup}) {
    return (
        <div id="popup">
            <div id="model-box">
                <p>Arrey {players.X} aur {players.O} &#128533; </p>
                <p>Pehle Kitna match khelna hai, ye to bata do &#128580; </p>
                <button onClick={hidePopup}>Thik hai &#128077;</button>
            </div> 
        </div>
    );
}