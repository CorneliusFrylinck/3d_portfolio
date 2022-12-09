import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React, {useEffect, useState} from "react";

export default observer(function PauseMenu(props) {
    const { gameStore } = useStore();
    const [cbxState, setCbxState] = useState(false);

    useEffect(() => {
        // Update lock controls on checkbox changed
        gameStore.setLockControls(! cbxState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cbxState])

    useEffect(() => {
        if (! gameStore.paused) return;

        // Checkbox indicating mobile option
        let cbx = document.getElementById('isMobile');
        // Update checkbox to current state - if not done it gets reset and out-of-sync when played and paused
        cbx.checked = cbxState ? true : false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameStore.paused])
    
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
                                <div>To hide or show this menu, click the pause button....................................................</div><br/>
                                <div>Movement is handled using the arrow buttons on the left of your screen....................</div><br/>
                                <div>When a canvas has an action, the action will be described on the canvas or above it</div>
                            </div>
                        )
                    }
                    <p> <label><input id="isMobile" type="checkbox" onClick={() => setCbxState(state => !state)} />Check if you are using a mobile device</label></p>
                </div>
            )}
            {! gameStore.paused && gameStore.lockControls &&
                <div className="dot" />
            }
        </>
    )
})