import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from "./components/Ground.js"
import Player from "./components/Player.js"
import './App.css';
import { RigidBody } from "@react-three/rapier"
import { TextFrameManager } from "./components/TextFrameManager.js"
import { ImageFrameManager } from "./components/ImageFrameManager.js"
import { StackShack } from "./components/StackShack.js"
import { observer } from "mobx-react-lite"

function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
        { name: "action", keys: ["e", "E"] },
      ]}>
      <Canvas shadows camera={{ fov: 45 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>
          <StackShack />
          <RigidBody 
            dispose={null}  
            position={[0, 1, -10]}  
            scale={[1, 1, 6]} 
            type="fixed" 
            colliders="hull"
          >
            <TextFrameManager />
            <ImageFrameManager />
          </RigidBody>
          <Ground />
          <Player />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  );
}

export default observer(App);