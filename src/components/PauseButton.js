import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React from "react";

export default observer(function Buttons(props) {
    const { gameStore } = useStore();

    const pauseClicked = () => {
        gameStore.PlayPause();
    }
    
    return (
        <>
            {! gameStore.lockControls ? (
                <>
                    <button className="front" onClick={() => pauseClicked()}><div></div></button>
                </>
            ): (
                <div></div>
            )}
        </>
    )
})