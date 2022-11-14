import { useGLTF } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import bookStandUrl from "../assets/BookStand.glb";
import { RigidBody } from "@react-three/rapier"

export function Pillar(props) {
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [scale,] = useState(props.scale);
  const [angleX,] = useState(props.angleX);
  const [angleY,] = useState(props.angleY);
  const [angleZ,] = useState(props.angleZ);
  const [trunkHeight,] = useState(props.trunkHeight);
  const [standHeight,] = useState(props.standHeight);
  const group = useRef();

  const bookStand = useGLTF(bookStandUrl);

  useEffect(() => {
    if (angleX) group.current.rotateX(angleX);
    if (angleY) group.current.rotateY(angleY);
    if (angleZ) group.current.rotateZ(angleZ);
  }, [angleX, angleY, angleZ])

  return (
    <group dispose={null} position={[x, y, z - 0.0011]} scale={scale? scale : 0.5} ref={group}>
    <RigidBody dispose={null} colliders="trimesh">
      <mesh scale={[1, trunkHeight, 1]} >
        <cylinderBufferGeometry attach="geometry" />
        <meshStandardMaterial color="#a1a1a1"  />
      </mesh>
    </RigidBody>
    <RigidBody dispose={null} colliders="cuboid">
      <mesh position={[0, standHeight, 0]} geometry={bookStand.nodes.Cylinder.geometry} material={bookStand.materials.G} scale={[2, 1, 2]}  />
    </RigidBody>
    </group>
  )
}

useGLTF.preload(bookStandUrl);