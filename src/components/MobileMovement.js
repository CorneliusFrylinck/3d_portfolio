import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React from "react";

export default observer(function MobileMovement(props) {
    const { gameStore } = useStore();

    const leftClicked = () => {
        console.log("Not implemented yet")
    }

    const rightClicked = () => {
        console.log("Not implemented yet")
    }

    const upClicked = () => {
        console.log("Not implemented yet")
    }

    const downClicked = () => {
        console.log("Not implemented yet")
    }
    
    return (
        <>
            {! gameStore.lockControls && ! gameStore.paused ? (
                <div className="movement">
                    <button className="left" onClick={() => leftClicked()}><div></div></button>
                    <button className="right" onClick={() => rightClicked()}><div></div></button>
                    <button className="up" onClick={() => upClicked()}><div></div></button>
                    <button className="down" onClick={() => downClicked()}><div></div></button>
                </div>
            ): (
                <div></div>
            )}
        </>
    )
})