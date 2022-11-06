
import { Text } from "@react-three/drei"

export function TextFrame(props) {
  return (
    <>
      <mesh  position={[2, 0, -0.0011]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      <mesh  position={[2, 0, -0.001]}>
        <boxGeometry args={[1.03, 1.03, 0.011]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh  position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <meshStandardMaterial color={"#dedede"} />
        <Text position={[0,0,0.008]} color={"#5c5c5c"}>
          Words
        </Text>
      </mesh>
    </>
  )
}