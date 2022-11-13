import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef, useState } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"
import { observer } from "mobx-react-lite"
import { useStore } from "../stores/imageStore";

var SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export default observer(function Player() {
  const ref = useRef()
  const rapier = useRapier()
  const { camera } = useThree()
  const [, get] = useKeyboardControls()
  const imageStore = useStore();
  const [movingImage, setMovingImage] = useState(false);
  const [openingLive, setOpeningLive] = useState(false);
  const [openingRepo, setOpeningRepo] = useState(false);

  useFrame((state) => {
    const { forward, backward, left, right, jump, action, openRepo, openLive } = get()
    const velocity = ref.current.linvel()
    
    // Update camera
    camera.position.set(...ref.current.translation())

    // Movement
    frontVector.set(0, 0, backward - forward)

    // Check if action button 'E' is being pressed
    if (action) {
      // Check if action has been implemented as of yet
      if (!movingImage) {
        // Update image
        imageStore.moveHoveredImage();
      }
      // Set as clicked
      setMovingImage(true);
    }else {
      // Set as not released
      setMovingImage(false);
    }

    // Open Repo project
    if (!openingRepo && openRepo) {
      imageStore.openRepoProject();
      setOpeningRepo(true);
    }
    // Reset flag
    if (openingRepo && !openRepo) {
      setOpeningRepo(false);
    }

    // Open Live project
    if (!openingLive && openLive) {
      imageStore.openLiveProject();
      setOpeningLive(true);
    }
    // Reset flag
    if (openingLive && !openLive) {
      setOpeningLive(false);
    }
    
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })

    // Jumping
    const world = rapier.world.raw()
    const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }))
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75
    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 7.5, z: 0 })
  })
  return (
    <>
      <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0, 10, 0]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  )
})