import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef, useState } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"
import { observer } from "mobx-react-lite"
import { useStore } from "../stores/store.js";

// Max speed when walking
const SPEED = 5;
// Max speed when sprinting
const SPRINT_SPEED = 10;
// Start speed when walking
const MIN_SPEED = 3.5;

// Higher number means slower speed up
const SPEEDUP_RATE = 150;
// Higher number means faster speed down
const SPEEDDOWN_RATE = 50;

// Current speed player is moving at
var current_speed = 0;
// Current speed player is rotating at
var current_rotation_speed = 0;

// Start rotation speed
const MIN_ROTATION = 0.004;
// Max rotation speed
const MAX_ROTATION = 0.02;

// Move direction
const direction = new THREE.Vector3();
// Vector for forward/backward calculation
const frontVector = new THREE.Vector3();
// Vector for left/right calculation
const sideVector = new THREE.Vector3();

export default observer(function Player() {
  // Rigid body containing player
  const ref = useRef();
  const rapier = useRapier();
  const { camera } = useThree();
  const [, get] = useKeyboardControls();

  // Store used to manage image-related functions such as switching text and image or opening links
  const { imageStore, gameStore } = useStore();

  // Keep track of X and Z movement values to enable gradual increase and decline
  const [lastMovement, setlastMovement] = useState({x: 0, z: 0});
  // Flag if switching image - flag used to ensure we switch it once per click
  const [movingImage, setMovingImage] = useState(false);
  // Flag if opening live link - flag used to ensure we run it once per click
  const [openingLive, setOpeningLive] = useState(false);
  // Flag if opening repo link - flag used to ensure we run it once per click
  const [openingRepo, setOpeningRepo] = useState(false);
  // Flag if playing or pausing
  const [playPauseFlag, setplayPauseFlag] = useState(false);

  useFrame((state) => {
    // Get flags for each key to find out if they are being clicked
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
    }else {// If not moving, reduce speed until MIN_SPEED reached
      if (current_speed > MIN_SPEED) {
        current_speed -= SPRINT_SPEED / SPEEDDOWN_RATE;
        frontVector.z = lastMovement.z;
        sideVector.x = lastMovement.x;
      }
    }

    // If mobile, lockControls are switched off
    if (! gameStore.lockControls) {
      // Set speed
      current_speed = SPEED;
      // Check if left or right are being clicked
      if (gameStore.left || gameStore.right) {
        // Increase left-rotation speed
        if (gameStore.left)
          if (current_rotation_speed < MAX_ROTATION) current_rotation_speed += MIN_ROTATION;
          // Increase right-rotation speed
        if (gameStore.right)
          if (current_rotation_speed > -MAX_ROTATION) current_rotation_speed -= MIN_ROTATION;
      } // Reset rotation speed
      else current_rotation_speed = 0;
      
      // Set if forward pressed
      if (gameStore.up) forward = 1;
      else forward = 0;
      // Set if backward pressed
      if (gameStore.down) backward = 1;
      else backward = 0;

      // Set forward vector that keeps track of forward/backward movement speed
      frontVector.set(0, 0, backward - forward)
    }
    
    // Set left/right movement speed
    sideVector.set(left - right, 0, 0)
    // Create direction object from forward and side vectors
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(current_speed).applyEuler(camera.rotation)
    // Set movement speed
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
    // Set camera rotation speed
    camera.rotateY(current_rotation_speed);

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