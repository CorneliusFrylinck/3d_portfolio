import { RigidBody } from "@react-three/rapier"

export function Blocks(props) {
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
      <>
        <RigidBody position={[11, 0.1, -4.3]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11, 0.1, -3.7]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11, 0.1, -3.1]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[10.25, 0.1, -3.1]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[10.25, 0.1, -4.9]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[10.25, 0.1, -4.3]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[10.25, 0.1, -3.7]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[10.25, 0.6, -3.4]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[10.25, 0.6, -4]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[10.25, 0.6, -4.3]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11.75, 0.1, -3.1]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11.25, 0.6, -3.1]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11.75, 0.1, -3.7]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11.75, 0.1, -4.3]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11.75, 0.1, -4.9]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11.75, 0.7, -4.0]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11, 0.1, -4.9]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11, 0.1, -5.5]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11, 0.7, -5.3]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11.75, 0.7, -4.6]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="cuboid">
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={getRandomColor()} />
          </mesh>
        </RigidBody>
        <RigidBody position={[11, 0.8, -4.3]} scale={[0.5, 0.5, 0.5]} dispose={null} colliders="ball">
          <mesh>
            <sphereGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>
      </>
    )
  }
          