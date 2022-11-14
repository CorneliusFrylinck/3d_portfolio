import { makeAutoObservable } from "mobx"

export default class GameStore {
    paused = true;

    constructor() {
        makeAutoObservable(this)
    }

    PlayPause = () => {
        this.paused = ! this.paused;
    }
}