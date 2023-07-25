import React, {useState} from 'react';
import './App.css';
import Card from "./components/Card";
import NeonButtonSign from "./components/buttons/NeonButtonSign";
import NeonButtonBorder from "./components/buttons/NeonButtonBorder";
import DirectionButton from "./components/buttons/DirectionButton";
import Popup from "./components/Popup";

function App() {
    const [togglePopup, setTogglePopup] = useState(false);
    return (
        <div className="App">
            <h1 className={"title"}>Button Effects Gallery</h1>

            <div className={"card-list"}>
                <Card category={"Neon Button"} desc={"let this cool light shine!"}>
                    <NeonButtonSign onClick={() => setTogglePopup(!togglePopup)}/>
                </Card>
                <Card category={"Neon Button 2"} desc={"hover me to discover the snake border"}>
                    <NeonButtonBorder/>
                </Card>
                <Card category={"Directional Button"} desc={"let the colour grow through holding the button"}>
                    <DirectionButton/>
                </Card>
            </div>
            <Popup toggle={togglePopup}/>
        </div>
    );
}

export default App;
