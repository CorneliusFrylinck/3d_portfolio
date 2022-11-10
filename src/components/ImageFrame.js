import { Image, Text } from "@react-three/drei"
import { observer } from "mobx-react-lite";
import { useState, useRef, useEffect, useCallback } from "react"
import { useStore } from "../stores/imageStore";

export default observer(function ImageFrame(props) {
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [angle,] = useState(props.angle);
  const [images,] = useState(props.images);
  // eslint-disable-next-line no-unused-vars
  const [key,] = useState(props.keyProp);
  // TODO - remove if not using link to project/source, or use it
  const [link,] = useState(props.link);
  const [index,] = useState(props.index);
  const group = useRef();
  const image = useRef();
  const [imageIdx, setImageIdx] = useState(0);
  const [hover, setHover] = useState(false)
  const checker = useRef();

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

  const imageStore = useStore();

  useEffect(() => {
    // Add image to context store
    imageStore.addImage({key: key, idx: imageIdx, totalImages: images.length});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // apply rotation
    group.current.rotateY(angle)
  }, [angle])

  useEffect(() => {
    // check if slideshow
    if (images.length < 2) return;
    // get current image
    let thisImage = imageStore.getImage(key);
    // check if different image should be loaded
    if (thisImage.idx !== imageIdx) {
      console.log("Updating image...")
      setImageIdx(thisImage.idx);
      image.url = images[imageIdx];
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageStore.images])

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
      <mesh ref={checker} onPointerMove={onMove} onPointerOut={onOut} position={[x, y, z + 0.009]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={"black"} opacity={0} transparent />
      </mesh>
      {/* Image */}
      <mesh position={[x, y, z]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <Image ref={image} raycast={() => null} position={[0, 0, 0.008]} url={images[0]} />
      </mesh>
      {/* Display text if slideshow */}
      {images.length > 1 && (
        <Text maxWidth={1} textAlign={"center"} position={[x,y+0.7,z]} color={"#5c5c5c"}>
          Press 'E' to view the next image
        </Text>
      )}
    </group>
  )
})