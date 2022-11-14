import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React from "react";

export default observer(function PauseMenu(props) {
    const { gameStore } = useStore();
console.log(gameStore.paused)
    return (
        <>
            {gameStore.paused && (
                <div className="modal">
                    <h2>PAUSE MENU</h2>
                    <div>To hide or show this menu, press 'h'............................................................................</div>
                    <div>Movement is handled using the standard 'WASD' keys................................................</div>
                    <div>To look around with your mouse, click on the screen first (if you haven't already)........</div>
                    <div>When a canvas has an action, the action will be described on the canvas or above it</div>
                </div>
            )}
            {! gameStore.paused && 
                <div className="dot" />
            }
        </>
    )
})