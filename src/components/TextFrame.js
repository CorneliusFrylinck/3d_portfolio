import { Text } from "@react-three/drei"
import { useState, useRef, useEffect } from "react"

export function TextFrame(props) {
  const [text,] = useState(props.text);
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [angle,] = useState(props.angle);
  const [scale,] = useState(props.scale !== undefined ? props.scale : 1);
  const [textScale,] = useState(props.textScale !== undefined ? props.textScale : 0.1);
  const [hasFrame,] = useState(props.hasFrame !== undefined ? props.hasFrame : true);
  const [textAlign,] = useState(props.textAlign !== undefined ? props.textAlign : "center");
  const group = useRef();

  useEffect(() => {
    group.current.rotateY(angle);
  }, [angle])

  return (
    <group scale={scale} ref={group}>
      {hasFrame && (
      <mesh position={[x, y, z - 0.0011]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      )}
      <mesh position={[x, y, z - 0.001]}>
        <boxGeometry args={[1.03, 1.03, 0.011]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh position={[x, y, z]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <meshStandardMaterial color={"#dedede"} />
        <Text fontSize={textScale} maxWidth={1} textAlign={textAlign} position={[0,0,0.008]} color={"#5c5c5c"}>
          {text}
        </Text>
      </mesh>
    </group>
  )
}