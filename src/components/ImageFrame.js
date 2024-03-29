import { Image, Text } from "@react-three/drei"
import { observer } from "mobx-react-lite";
import { useState, useRef, useEffect, useCallback } from "react"
import { useStore } from "../stores/store.js";

export default observer(function ImageFrame(props) {
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [text, setText] = useState(props.text);
  // eslint-disable-next-line no-unused-vars
  const [key,] = useState(props.keyProp);
  // Link to Github Repo
  const [repoLink,] = useState(props.repoLink);
  const [liveLink,] = useState(props.liveLink);
  const [textPadding,] = useState(props.textPadding === undefined ? 0 : props.textPadding);
  const [textBase,] = useState(props.textBase === undefined ? 0 : props.textBase);
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
  
  const repoMessage = "\nPress 'g' to open the Github project in a new tab.";
  const liveMessage = "\nPress 'o' to open the project in a new tab.";

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

  const openLink = (link) => {
    window.open(link, "_blank");
  }

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
      textRef.current.position.setZ(0 + textBase);

      if (! gameStore.lockControls) return;
  
      if (repoLink !== undefined && liveLink !== undefined) {
        setText(text + repoMessage + liveMessage);
      }else if (repoLink !== undefined) {
        setText(text + repoMessage);
      }else if (liveLink !== undefined) {
        setText(text + liveMessage);
      }
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
      textRef.current.position.setZ(0.009 + textPadding + textBase);
      return;
    }
    setDisplayingImage(true);
    image.current.position.setZ(0.009);
    textRef.current.position.setZ(0 + textBase);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageStore.hover])

  const onClick = useCallback((e) => {
    e.stopPropagation()
    console.log(text)
    // Set as hovered image
      imageStore.setHover({key: key, x: x, y: y});
      if (! gameStore.lockControls) {
        imageStore.actionFlag = true;
      }
      // Set hovering for highlighting
      setHover(true);
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
      <mesh ref={checker} onClick={onClick} onPointerMove={onMove} onPointerOut={onOut} position={[x, y, z + 0.0095]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={"black"} opacity={0} transparent />
      </mesh>
      {/* Blocker */}
      <mesh position={[x, y, z + 0.003]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <meshStandardMaterial color={"white"} opacity={0} />
      </mesh>
      {/* Repo Link */}
      {! gameStore.lockControls && repoLink !== undefined && 
        <>
          <mesh onClick={() => openLink(repoLink)} rotation={[1.565, 0, 0]} scale={[0.1, 0.001, 0.1]} position={[x - 0.4, y - 0.4, z + 0.016]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color="#4c4c4c" opacity={0} transparent />
          </mesh>
          <mesh rotation={[1.565, 0, 0]} scale={[0.08, 0.004, 0.08]} 
          position={[x - 0.4, y - 0.4, z + 0.011]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color="#4c4c4c" />
          </mesh>
          <Text 
            key={key} maxWidth={0.3} scale={[0.4, 0.4, 10]} position={[x - 0.4, y - 0.4, z + 0.015001]} 
            textAlign={"center"} color={"#f1f1f1"} 
            >Repo Link
          </Text>
        </>
      }
      {/* Live Link */}
      {! gameStore.lockControls && liveLink !== undefined && 
        <>
          <mesh onClick={() => openLink(liveLink)} rotation={[1.565, 0, 0]} scale={[0.1, 0.001, 0.1]} position={[x + 0.4, y - 0.4, z + 0.016]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color="limegreen" opacity={0} transparent />
          </mesh>
          <mesh rotation={[1.565, 0, 0]} scale={[0.08, 0.004, 0.08]} 
          position={[x + 0.4, y - 0.4, z + 0.011]}>
            <cylinderBufferGeometry attach="geometry" />
            <meshStandardMaterial color="limegreen" />
          </mesh>
          <Text 
            key={key} maxWidth={0.3} scale={[0.4, 0.4, 10]} position={[x + 0.4, y - 0.4, z + 0.015001]} 
            textAlign={"center"} color={"#f1f1f1"} 
            >Site Link
          </Text>
        </>
      }
      {/* Image */}
      <mesh position={[x, y, z]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <Image ref={image} raycast={() => null} position={[0, 0, 0.009]} url={imageUrl} />
      </mesh>
      {/* Display text if has text */}
      {text !== undefined &&
        <Text ref={textRef} position={[x, y, z + textBase]} fontSize={textScale} maxWidth={1} textAlign={"center"} color={"#5c5c5c"}>
          {text}
        </Text>
      }
      {text !== undefined && image !== undefined && gameStore.lockControls &&
        <Text key={key} maxWidth={1} position={[x, y + 0.75, z]} textAlign={"center"} color={"#616161"} >Press 'e' to switch between the image and the text.</Text>
      }
      {text !== undefined && image !== undefined && ! gameStore.lockControls &&
        <Text key={key} maxWidth={1} position={[x, y + 0.75, z]} textAlign={"center"} color={"#616161"} >Click on canvas to switch between the image and the text.</Text>
      }
    </group>
  )
})