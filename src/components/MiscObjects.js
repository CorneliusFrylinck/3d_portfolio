import { RigidBody } from "@react-three/rapier"

export function MiscObjects(props) {
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const db1_Color = getRandomColor();
    const db2_Color = getRandomColor();

    return (
      <>
        {/* WALL */}
        <RigidBody dispose={null} colliders="trimesh">
          {/* BACK WALL */}
          <mesh position={[0, 0, -40]} scale={[150, 4, 15]} >
            <boxGeometry />
            <meshStandardMaterial color="#1e1e1e" />
          </mesh>
          {/* LEFT WALL */}
          <mesh position={[-40, 0, 0]} scale={[15, 4, 175]} >
            <boxGeometry />
            <meshStandardMaterial color="#1e1e1e" />
          </mesh>
          {/* FRONT WALL */}
          <mesh position={[0, 0, 40]} scale={[150, 4, 15]} >
            <boxGeometry />
            <meshStandardMaterial color="#1e1e1e" />
          </mesh>
          {/* RIGHT WALL */}
          <mesh position={[40, 0, 0]} scale={[15, 4, 175]} >
            <boxGeometry />
            <meshStandardMaterial color="#1e1e1e" />
          </mesh>
        </RigidBody>
        {/* BARBELL */}
        <RigidBody position={[-11, 0.05, 4.3]} rotation={[1.575, 0, 0]} dispose={null} colliders="trimesh">
          <mesh scale={[0.03, 2.2, 0.03]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color="#a1a1a1" />
          </mesh>
          <mesh scale={[0.3, 0.1, 0.3]} position={[0, 1, 0]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color="#1c1c1c" />
          </mesh>
          <mesh scale={[0.3, 0.1, 0.3]} position={[0, -1, 0]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color="#1c1c1c" />
          </mesh>
        </RigidBody>
        {/* DUMBELL1 */}
        <RigidBody position={[-10, 0, 8.9]} rotation={[1.575, 0, -1]} dispose={null} colliders="trimesh">
          <mesh scale={[0.03, 0.4, 0.03]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color={db1_Color} />
          </mesh>
          <mesh scale={[0.3, 0.1, 0.3]} position={[0, 0.15, 0]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color={db1_Color}  />
          </mesh>
          <mesh scale={[0.3, 0.1, 0.3]} position={[0, -0.15, 0]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color={db1_Color}  />
          </mesh>
        </RigidBody>
        {/* DUMBELL2 */}
        <RigidBody position={[-10.6, 0, 8.9]} rotation={[1.575, 0, 1]} dispose={null} colliders="trimesh">
          <mesh scale={[0.03, 0.4, 0.03]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color={db2_Color} />
          </mesh>
          <mesh scale={[0.3, 0.1, 0.3]} position={[0, 0.15, 0]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color={db2_Color}  />
          </mesh>
          <mesh scale={[0.3, 0.1, 0.3]} position={[0, -0.15, 0]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color={db2_Color}  />
          </mesh>
        </RigidBody>
        <RigidBody position={[-8, 0.8, 8]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="ball">
          <mesh>
            <sphereGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>
      </>
    )
  }
          