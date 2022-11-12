import { makeAutoObservable } from "mobx"
import {createContext, useContext} from "react"

class ImageStore {
    // List of imageFrames in store
    images = []
    // ImageFrame player is hovering on
    hover = null;
    // Flag if action key pressed
    actionFlag = false;

    constructor() {
        makeAutoObservable(this)
    }

    // Add image to lsit
    addImage = (image) => {
        this.images.push(image)
    }

    // Update selected slideshow
    moveHoveredImage = () => {
        console.log("moving");
        console.log(this.hover);
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
}

export const imageStore = new ImageStore();

export const ImageContext = createContext(imageStore);

export function useStore() {
    return useContext(ImageContext);
}