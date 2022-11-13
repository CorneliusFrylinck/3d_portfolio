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
import { CanvasStandManager } from "./components/CanvasStandManager.js"
import { Blocks } from "./components/Blocks.js"
import { PillarManager } from "./components/PillarManager.js"
import { MiscObjects } from "./components/MiscObjects.js"

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
        { name: "openLive", keys: ["o", "O"] },
        { name: "openRepo", keys: ["g", "G"] },
      ]}>
      <Canvas shadows camera={{ fov: 45 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>
          <StackShack />
          <CanvasStandManager />
          <PillarManager />
          <MiscObjects />
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
          <Blocks />
          <Ground />
          <Player />
        </Physics>
        {/* PROJECT SECTION FLOOR */}
        <mesh position={[9.5, 0, -7]} scale={[10, 0.1, 10]}>
          <boxGeometry />
          <meshStandardMaterial color="#fefefe" />
        </mesh>
        {/* EDUCATION SECTION FLOOR */}
        <mesh position={[9.5, 0, 7]} scale={[10, 0.1, 10]}>
          <boxGeometry />
          <meshStandardMaterial color="#fefefe" />
        </mesh>
        {/* ABOUT SECTION FLOOR */}
        <mesh position={[-10, 0, 7]} scale={[10, 0.001, 10]}>
          <boxGeometry />
          <meshStandardMaterial color="#fefefe" />
        </mesh>
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  );
}

export default observer(App);