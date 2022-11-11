import { Text, useGLTF } from "@react-three/drei"
import { useState, useRef, useEffect } from "react"
import wood from "../assets/Plank.glb"



export function Plank(props) {
  const [text,] = useState(props.text);
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [angle,] = useState(props.angle);
  const group = useRef();

  const { nodes, materials } = useGLTF(wood);

  useEffect(() => {
    group.current.rotateY(angle)
  }, [angle])

  return (
    <group dispose={null} ref={group}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Wood} position={[x, y, z - 0.0011]} />
      {text && (
        <Text maxWidth={1} textAlign={"center"} position={[x, y, z]} color={"#5c5c5c"}>
          {text}
        </Text>
      )}
    </group>
  )
}

useGLTF.preload("../assets/Plank.glb");