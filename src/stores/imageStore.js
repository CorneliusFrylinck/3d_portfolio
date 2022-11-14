import { makeAutoObservable } from "mobx"
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

export default class ImageStore {
    // List of imageFrames in store
    images = []
    // ImageFrame player is hovering on
    hover = null;
    // Flag if action key pressed
    actionFlag = false;
    // Open Live Flag
    openLive = false;
    // Open Repo Flag
    openRepo = false;

    constructor() {
        makeAutoObservable(this)
    }

    // Add image to lsit
    addImage = (image) => {
        this.images.push(image)
    }

    // Update selected slideshow
    moveHoveredImage = () => {
        // Return if not hovering
        if (this.hover === null) return;
        // Set action flag
        this.actionFlag = true;
    }

    // Get frame
    getImage = (key) => {
        return this.images.find(x => x.key === key);
    }

    // Set new hovered frame
    setHover = (hover) => {
        this.hover = hover;
    }

    // Get key of hovered frame
    getHoverKey = () => {
        if (this.hover === null) return this.hover;
        return this.hover.key;
    }

    // Open live project in new tab
    openLiveProject = () => {
        if (this.hover === null) return;
        this.openLive = true;
    }

    // Open live project in new tab
    openRepoProject = () => {
        if (this.hover === null) return;
        this.openRepo = true;
    }
}