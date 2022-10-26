import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls, useGLTF } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Ground } from "./components/Ground.js"
import { Player } from "./components/Player.js"
import './App.css';
import stairUrl from "./assets/Stairs.glb"

function App() {
  const { nodes, materials } = useGLTF(stairUrl)
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
          <group dispose={null}  position={[1, 1, 0]}  scale={0.5}>
              <mesh geometry={nodes.Cube.geometry} material={materials.A} />
              <mesh geometry={nodes.Lining.geometry} material={materials.LiningMat} />
          </group>
          <Ground />
          <Player />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  );
}

export default App;

useGLTF.preload("./assets/Stairs.glb")