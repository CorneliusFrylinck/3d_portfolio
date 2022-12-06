import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store.js";
import '../App.css';
import React from "react";

export default observer(function MobileMovement(props) {
    const { gameStore } = useStore();

    const leftClicked = () => {
        gameStore.setLeft(true);
    }

    const rightClicked = () => {
        gameStore.setRight(true);
    }

    const upClicked = () => {
        gameStore.setUp(true);
    }

    const downClicked = () => {
        gameStore.setDown(true);
    }

    const leftReleased = () => {
        gameStore.setLeft(false);
    }

    const rightReleased = () => {
        gameStore.setRight(false);
    }

    const upReleased= () => {
        gameStore.setUp(false);
    }

    const downReleased= () => {
        gameStore.setDown(false);
    }

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