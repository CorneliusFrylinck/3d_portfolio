import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef, useState } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"
import { observer } from "mobx-react-lite"
import { useStore } from "../stores/store.js";

const SPEED = 5;
const SPRINT_SPEED = 10;
const MIN_SPEED = 3.5;
// Higher number means slower speedup/down
const SPEEDUP_RATE = 150;
const SPEEDDOWN_RATE = 50;
var current_speed = 0;

const MIN_ROTATION = 0.002;
const MAX_ROTATION = 0.01;

const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

export default observer(function Player() {
  const ref = useRef();
  const rapier = useRapier();
  const { camera } = useThree();
  const [, get] = useKeyboardControls();
  const { imageStore, gameStore } = useStore();
  const [lastMovement, setlastMovement] = useState({x: 0, z: 0});
  const [movingImage, setMovingImage] = useState(false);
  const [openingLive, setOpeningLive] = useState(false);
  const [openingRepo, setOpeningRepo] = useState(false);
  const [playPauseFlag, setplayPauseFlag] = useState(false);
  let yDir = 0;

  useFrame((state) => {
    let { forward, backward, left, right, jump, action, openRepo, openLive, help, sprint } = get()
    const velocity = ref.current.linvel()

    // Check if help clicked before stopping other functions
    if (help && ! playPauseFlag) {
      // Set flag to insure that the funciton is only called once per click
      setplayPauseFlag(true);
      // Play or pause the game
      gameStore.PlayPause();
    }

    // Reset flag when released
    if (! help) {
      // Play or pause the game
      setplayPauseFlag(false);
    }

    // Stop all player functions when paused
    if (gameStore.paused) return;
    
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
    
    // Check if moving 
    if (gameStore.lockControls && (frontVector.z !== 0 || sideVector.x !== 0)) {
      // Set movement as last movement for slowdown lag
      setlastMovement({x: sideVector.x, z: frontVector.z})
      // Check sprinting
      if (sprint) {
        // Speed up until reaching sprint speed
        if (current_speed < SPRINT_SPEED) {
          current_speed += SPRINT_SPEED / SPEEDUP_RATE;
        }

      }else if (current_speed > SPEED) {// Check if speed too much, slow down
        current_speed -= SPRINT_SPEED / SPEEDUP_RATE;

      }else {// Otherwise speed up until reaching speed
        current_speed += SPEED / SPEEDUP_RATE;

      }
    }else {// If not moving, set speed to MIN_SPEED
      if (current_speed > MIN_SPEED) {
        current_speed -= SPRINT_SPEED / SPEEDDOWN_RATE;
        frontVector.z = lastMovement.z;
        sideVector.x = lastMovement.x;
      }
    }

    if (! gameStore.lockControls) {
      current_speed = SPEED;

      if (gameStore.left || gameStore.right) {
        if (gameStore.left)
          if (yDir < MAX_ROTATION) yDir += MIN_ROTATION;
        if (gameStore.right)
          if (yDir > -MAX_ROTATION) yDir -= MIN_ROTATION;
      }
      else yDir = 0;
      
      if (gameStore.up) forward = 1;
      else forward = 0;
      
      if (gameStore.down) backward = 1;
      else backward = 0;

      frontVector.set(0, 0, backward - forward)
    }
    
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(current_speed).applyEuler(camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
    camera.rotateY(yDir);

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