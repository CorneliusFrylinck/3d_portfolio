import { makeAutoObservable } from "mobx"

export default class GameStore {
    paused = true;
    lockControls = false;
    left = false;
    right = false;
    up = false;
    down = false;

    constructor() {
        makeAutoObservable(this)
    }

    PlayPause = () => {
        this.paused = ! this.paused;
    }

    setLockControls = (canLock) => {
        this.lockControls = canLock;
    }

    setLeft = (value) => {
        this.left = value;
    }

    setRight = (value) => {
        this.right = value;
    }

    setUp = (value) => {
        this.up = value;
    }

    setDown= (value) => {
        this.down = value;
    }
}