import { Text, useGLTF } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import plankUrl from "../assets/Plank.glb";



export function Plank(props) {
  const [text,] = useState(props.text);
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [scale,] = useState(props.scale);
  const [angleX,] = useState(props.angleX);
  const [angleY,] = useState(props.angleY);
  const [angleZ,] = useState(props.angleZ);
  const group = useRef();
  const plankRef = useRef();

  const { nodes, materials } = useGLTF(plankUrl);
  //const texture = useTexture(plank)

  useEffect(() => {
    if (angleX) plankRef.current.rotateX(angleX);
    if (angleY) plankRef.current.rotateY(angleY);
    if (angleZ) plankRef.current.rotateZ(angleZ);
  }, [angleX, angleY, angleZ])

  return (
    <group dispose={null} position={[x, y, z - 0.0011]} scale={scale? scale : 0.5} ref={group}>
      <mesh ref={plankRef} geometry={nodes.Cube.geometry} material={materials.A} />
      {text && (
        <Text fontSize={0.125} position={[0, 0.77, 0.10]} scale={8} maxWidth={3} textAlign={"center"} color={"#3e1e1e"}>
          {text}
        </Text>
      )}
    </group>
  )
}

useGLTF.preload("../assets/Plank.glb");