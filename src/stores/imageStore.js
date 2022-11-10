import { makeAutoObservable } from "mobx"
import {createContext, useContext} from "react"

class ImageStore {
    // List of imageFrames in store
    images = []
    // ImageFrame player is hovering on
    hover = null;

    constructor() {
        makeAutoObservable(this)
    }

    // Add image to lsit
    addImage = (image) => {
        this.images.push(image)
    }

    // Update selected slideshow
    moveImage = () => {
        // Return if not hovering
        if (this.hover === null) return;
        // Get hovered
        let selectedImage = this.images.find(x => x.key === this.hover.key);
        // Check if slideshow
        if (selectedImage.totalImages < 2) return;
        // If on last slide
        if (selectedImage.idx === selectedImage.totalImages-1) {
            // Revert to first slide
            selectedImage.idx = 0;
            return;
        }
        // Move to next slide
        ++selectedImage.idx;
    }

    // Get frame
    getImage = (key) => {
        return this.images.find(x => x.key === key);
    }

    // Set new hovered frame
    setHoverKey = (hover) => {
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