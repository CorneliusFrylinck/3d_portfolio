import { makeAutoObservable } from "mobx"

export default class GameStore {
    paused = true;
    lockControls = false;

    constructor() {
        makeAutoObservable(this)
    }

    PlayPause = () => {
        this.paused = ! this.paused;
    }

    setLockControls = (canLock) => {
        this.lockControls = canLock;
    }
}