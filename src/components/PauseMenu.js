import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React, {useEffect, useState} from "react";

export default observer(function PauseMenu(props) {
    const { gameStore } = useStore();
    const [cbxState, setCbxState] = useState(false);

    useEffect(() => {
        gameStore.setLockControls(! cbxState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cbxState])
    
    return (
        <>
            {gameStore.paused && (
                <div className="modal">
                    <h2>PAUSE MENU</h2>
                    {gameStore.lockControls ? ( 
                            <div>
                                <div>To hide or show this menu, press 'H'.......................................................................</div><br/>
                                <div>Movement is handled using the standard 'WASD' keys.............................................</div><br/>
                                <div>Press 'Shift' to sprint.................................................................................................</div><br/>
                                <div>To look around with your mouse, click on the screen first (if you haven't already)......</div><br/>
                                <div>To regain control of your mouse, press 'Escape'.........................................................</div><br/>
                                <div>When a canvas has an action, the action will be described on the canvas or above it</div>
                            </div>
                        ) : (
                            <div>
                                <div>NOTE: Mobile functionality is under construction and will only be completed on the 7th of December.</div>
                                <div>To hide or show this menu, click the pause button....................................................</div><br/>
                                <div>Movement is handled using the arrow buttons on the left of your screen....................</div><br/>
                                <div>When a canvas has an action, the action will be described on the canvas or above it</div>
                            </div>
                        )
                    }
                    <p> <label><input type="checkbox" onClick={() => setCbxState(state => !state)} />Check if you are using a mobile device</label></p>
                </div>
            )}
            {! gameStore.paused && 
                <div className="dot" />
            }
        </>
    )
})