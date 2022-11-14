import { createContext, useContext } from "react";
import GameStore from "./gameStore.js";
import ImageStore from './imageStore.js'

export const store = {
    imageStore: new ImageStore (),
    gameStore: new GameStore ()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}