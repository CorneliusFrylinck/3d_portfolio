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
        if (this.hover === null) return;
        let selectedImage = this.images.find(x => x.key === this.hover.key);
        if (selectedImage.totalImages < 2) return;
        if (selectedImage.idx === selectedImage.totalImages-1) {
            selectedImage.idx = 0;
            return;
        }
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