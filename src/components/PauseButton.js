import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React from "react";

export default observer(function PauseButton(props) {
    const { gameStore } = useStore();

    const clicked = () => {
        gameStore.PlayPause();
    }
    
    return (
        <>
            {! gameStore.lockControls ? (
                <button className="front" onClick={() => clicked()}><div>||</div></button>
            ): (
                <div></div>
            )}
        </>
    )
})