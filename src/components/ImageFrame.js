import { Image, Text } from "@react-three/drei"
import { observer } from "mobx-react-lite";
import { useState, useRef, useEffect, useCallback } from "react"
import { useStore } from "../stores/store.js";

export default observer(function ImageFrame(props) {
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [text,] = useState(props.text);
  // eslint-disable-next-line no-unused-vars
  const [key,] = useState(props.keyProp);
  // Link to Github Repo
  const [repoLink,] = useState(props.repoLink);
  const [liveLink,] = useState(props.liveLink);
  const [scale,] = useState(props.scale);
  const [angle,] = useState(props.angle);
  const [images,] = useState(props.images);
  const [hover, setHover] = useState(false)
  const [imageIdx, ] = useState(0);
  const [textScale,] = useState(props.textScale);
  const [imageUrl, ] = useState(images[0]);
  const [displayingImage, setDisplayingImage] = useState(true);
  const checker = useRef();
  const textRef = useRef();
  const group = useRef();
  const image = useRef();

  const { imageStore, gameStore } = useStore();

  const onMove = useCallback((e) => {
    e.stopPropagation()
    // Set as hovered image
    imageStore.setHover({key: key, x: x, y: y});
    // Set hovering for highlighting
    setHover(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onOut = useCallback(() => {
    // Set as none hovering if this is the current hovering
    if (imageStore.getHoverKey() === key) {
      imageStore.setHover(null);
    }
    // Remove highlight
    setHover(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Check if link is undefined, hovering over this and check that open live flag is set
    if (liveLink === undefined || imageStore.getHoverKey() !== key || ! imageStore.openLive) return;
    // Reset flag
    imageStore.openLive = false;
    // Open live project in new tab
    window.open(liveLink, '_blank');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageStore.openLive])

  useEffect(() => {
    // Check if link is undefined, hovering over this and check that open repo flag is set
    if (repoLink === undefined || imageStore.getHoverKey() !== key || ! imageStore.openRepo) return;
    // Reset flag
    imageStore.openRepo = false;
    // Open repo project in new tab
    window.open(repoLink, '_blank');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageStore.openRepo])

  useEffect(() => {
    // Apply rotation
    group.current.rotateY(angle)
  }, [angle])

  useEffect(() => {
    image.current.position.setZ(0.009);
    if (text !== undefined) {
      textRef.current.position.setZ(0);
    }
    // Add image to context store
    imageStore.addImage({key: key, idx: imageIdx, totalImages: images.length});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Apply rotation
    group.current.rotateY(angle)
  }, [angle])

  useEffect(() => {
    // Check if hovering over this and check that actionFlag is set
    if (imageStore.getHoverKey() !== key) setHover(false);
    if (imageStore.getHoverKey() !== key || !imageStore.actionFlag) return;
    imageStore.actionFlag = false;
    if (image === undefined || text === undefined) return;
    // Check if image is being displayed
    if (displayingImage) {
      setDisplayingImage(false);
      image.current.position.setZ(0);
      textRef.current.position.setZ(0.009);
      return;
    }
    setDisplayingImage(true);
    image.current.position.setZ(0.009);
    textRef.current.position.setZ(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageStore.hover])

  const onClick = useCallback((e) => {
    e.stopPropagation()
    // Set as hovered image
    if (imageStore.getHoverKey() === key) {
      imageStore.setHover(null);
      setHover(false);
    }else {
      imageStore.setHover({key: key, x: x, y: y});
      if (! gameStore.lockControls) {
        imageStore.actionFlag = true;
      }
      // Set hovering for highlighting
      setHover(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <group scale={scale !== undefined ? scale : 1} ref={group}>
      {/* Frame */}
      <mesh position={[x, y, z - 0.0011]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={hover ? "orange" : "blue"} />
      </mesh>
      {/* Inner frame */}
      <mesh position={[x, y, z - 0.001]}>
        <boxGeometry args={[1.03, 1.03, 0.011]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      {/* Cover used to check if this canvas is selected */}
      <mesh ref={checker} onClick={onClick} onPointerMove={onMove} onPointerOut={onOut} position={[x, y, z + 0.01]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={"black"} opacity={0} transparent />
      </mesh>
      {/* Blocker */}
      <mesh position={[x, y, z + 0.003]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <meshStandardMaterial color={"white"} opacity={0} />
      </mesh>
      {/* Image */}
      <mesh position={[x, y, z]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <Image ref={image} raycast={() => null} position={[0, 0, 0.009]} url={imageUrl} />
      </mesh>
      {/* Display text if has text */}
      {text !== undefined &&
        <Text ref={textRef} position={[x, y, z]} fontSize={textScale} maxWidth={1} textAlign={"center"} color={"#5c5c5c"}>
          {text}
        </Text>
      }
      {text !== undefined && image !== undefined && gameStore.lockControls &&
        <Text key={key} maxWidth={1} position={[x, y + 0.75, z]} textAlign={"center"} color={"#f1f1f1"} >Press 'e' to switch between the image and the text.</Text>
      }
      {text !== undefined && image !== undefined && ! gameStore.lockControls &&
        <Text key={key} maxWidth={1} position={[x, y + 0.75, z]} textAlign={"center"} color={"#f1f1f1"} >Click on canvas to switch between the image and the text.</Text>
      }
    </group>
  )
})