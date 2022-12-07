import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React from "react";

export default observer(function MobileMovement(props) {
    const { gameStore } = useStore();

    // Set left button as clicked when mouse or touch released
    const leftClicked = () => {
        gameStore.setLeft(true);
    }

    // Set right button as clicked when mouse or touch released
    const rightClicked = () => {
        gameStore.setRight(true);
    }

    // Set up button as clicked when mouse or touch released
    const upClicked = () => {
        gameStore.setUp(true);
    }

    // Set down button as clicked when mouse or touch released
    const downClicked = () => {
        gameStore.setDown(true);
    }

    // Set left button as released when mouse or touch released
    const leftReleased = () => {
        gameStore.setLeft(false);
    }

    // Set right button as released when mouse or touch released
    const rightReleased = () => {
        gameStore.setRight(false);
    }

    // Set up button as released when mouse or touch released
    const upReleased= () => {
        gameStore.setUp(false);
    }

    // Set down button as released when mouse or touch released
    const downReleased= () => {
        gameStore.setDown(false);
    }

    // If buttons are clicked/touched and not released till after swiping away, release if on movement div
    const resetButtons = () => {
      gameStore.setLeft(false);
      gameStore.setRight(false);
      gameStore.setUp(false);
      gameStore.setDown(false);
    }
    
    return (
        <>
            {! gameStore.lockControls && ! gameStore.paused ? (
                <div className="movement" onMouseUp={() => resetButtons()}>
                    <button className="left" onMouseDown={() => leftClicked()} onMouseUp={() => leftReleased()} onTouchStart={() => leftClicked()} onTouchEnd={() => leftReleased()} onTouchCancel={() => leftReleased()} ><div></div></button>
                    <button className="right" onMouseDown={() => rightClicked()} onMouseUp={() => rightReleased()} onTouchStart={() => rightClicked()} onTouchEnd={() => rightReleased()} onTouchCancel={() => rightReleased()} ><div></div></button>
                    <button className="up" onMouseDown={() => upClicked()} onMouseUp={() => upReleased()} onTouchStart={() => upClicked()} onTouchEnd={() => upReleased()} onTouchCancel={() => upReleased()} ><div></div></button>
                    <button className="down" onMouseDown={() => downClicked()} onMouseUp={() => downReleased()} onTouchStart={() => downClicked()} onTouchEnd={() => downReleased()} onTouchCancel={() => downReleased()} ><div></div></button>
                </div>
            ): (
                <div></div>
            )}
        </>
    )
})