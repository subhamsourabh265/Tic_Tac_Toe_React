import './PopUp.css';

export default function PopUp({players, hidePopup}) {
    return (
        <div id="popup">
            <div id="model-box">
                <p>Arrey <span>{players.X}</span> aur <span>{players.O}</span> &#128533; </p>
                <p>Pehle Kitna match khelna hai, ye to bata do &#128580; </p>
                <button onClick={hidePopup}>Thik hai &#128077;</button>
            </div> 
        </div>
    );
}