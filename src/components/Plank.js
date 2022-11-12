import { Text, useGLTF } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import plankUrl from "../assets/Plank.glb";



export function Plank(props) {
  const [text,] = useState(props.text);
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [scale,] = useState(props.scale);
  const [textScale,] = useState(props.textScale);
  const [angleX,] = useState(props.angleX);
  const [angleY,] = useState(props.angleY);
  const [angleZ,] = useState(props.angleZ);
  const group = useRef();

  const { nodes, materials } = useGLTF(plankUrl);

  useEffect(() => {
    if (angleX) group.current.rotateX(angleX);
    if (angleY) group.current.rotateY(angleY);
    if (angleZ) group.current.rotateZ(angleZ);
  }, [angleX, angleY, angleZ])

  return (
    <group dispose={null} position={[x, y, z - 0.0011]} scale={scale? scale : 0.5} ref={group}>
      <mesh geometry={nodes.Cube.geometry} material={materials.A} />
      {text && (
        <Text fontSize={textScale} position={[0, 0.77, 0.10]} scale={8} maxWidth={4} textAlign={"center"} color={"#3e1e1e"}>
          {text}
        </Text>
      )}
    </group>
  )
}

useGLTF.preload("../assets/Plank.glb");