import { Image, Text } from "@react-three/drei"
import { observer } from "mobx-react-lite";
import { useState, useRef, useEffect, useCallback } from "react"
import { useStore } from "../stores/imageStore";

export default observer(function ImageFrame(props) {
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [text,] = useState(props.text);
  // eslint-disable-next-line no-unused-vars
  const [key,] = useState(props.keyProp);
  // TODO - remove if not using link to project/source, or use it
  const [link,] = useState(props.link);
  const [index,] = useState(props.index);
  const [angle,] = useState(props.angle);
  const [images,] = useState(props.images);
  const [hover, setHover] = useState(false)
  const [imageIdx, setImageIdx] = useState(0);
  const [textScale,] = useState(props.textScale);
  const [imageUrl, setImageUrl] = useState(images[0]);
  const [displayingImage, setDisplayingImage] = useState(true);
  const checker = useRef();
  const textRef = useRef();
  const group = useRef();
  const image = useRef();

  const imageStore = useStore();

  const onMove = useCallback((e) => {
    e.stopPropagation()
    // Set as hovered image
    // TODO - check distance in player, update implementation
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
    image.current.position.setZ(0.009);
    textRef.current.position.setZ(0);
    console.log(image.current)
    // Add image to context store
    imageStore.addImage({key: key, idx: imageIdx, totalImages: images.length});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Apply rotation
    group.current.rotateY(angle)
  }, [angle])

  useEffect(() => {
    // Check if hovering over this
    if (imageStore.getHoverKey() !== key || !imageStore.actionFlag) return;
    imageStore.actionFlag = false;
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

  return (
    <group ref={group}>
      {/* Frame */}
      <mesh position={[x, y, z - 0.0011]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial  color={hover ? "orange" : "blue"} />
      </mesh>
      {/* Inner frame */}
      <mesh position={[x, y, z - 0.001]}>
        <boxGeometry args={[1.03, 1.03, 0.011]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      {/* Cover used to check if this canvas is selected */}
      <mesh ref={checker} onPointerMove={onMove} onPointerOut={onOut} position={[x, y, z + 0.01]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={"black"} opacity={0} transparent />
      </mesh>
      {/* Blocker */}
      <mesh onPointerMove={onMove} onPointerOut={onOut} position={[x, y, z + 0.003]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <meshStandardMaterial color={"white"} opacity={0} />
      </mesh>
      {/* Image */}
      <mesh position={[x, y, z]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <Image ref={image} raycast={() => null} position={[0, 0, 0.009]} url={imageUrl} />
      </mesh>
      {/* Display text if slideshow */}
      <Text ref={textRef} position={[x, y, z]} fontSize={textScale} maxWidth={1} textAlign={"center"} color={"#5c5c5c"}>
        {text}
      </Text>
    </group>
  )
})