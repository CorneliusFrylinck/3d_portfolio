import { useGLTF } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import standUrl from "../assets/CanvasStand.glb";



export function CanvasStand(props) {
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [scale,] = useState(props.scale);
  const [angleX,] = useState(props.angleX);
  const [angleY,] = useState(props.angleY);
  const [angleZ,] = useState(props.angleZ);
  const group = useRef();

  const { nodes, materials } = useGLTF(standUrl);

  useEffect(() => {
    if (angleX) group.current.rotateX(angleX);
    if (angleY) group.current.rotateY(angleY);
    if (angleZ) group.current.rotateZ(angleZ);
  }, [angleX, angleY, angleZ])

  return (
    <group dispose={null} position={[x, y, z - 0.0011]} scale={scale? scale : 0.5} ref={group}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Wood} />
    </group>
  )
}

useGLTF.preload("../assets/CanvasStand.glb");