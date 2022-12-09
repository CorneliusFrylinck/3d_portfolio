import { Text } from "@react-three/drei"
import { useState, useRef, useEffect, useCallback } from "react"
import { useStore } from "../stores/store.js";
import { observer } from "mobx-react-lite";

export default observer(function TextFrame(props) {
  const [text,] = useState(props.text);
  const [key,] = useState(props.idxKey);
  const [x,] = useState(props.x);
  const [y,] = useState(props.y);
  const [z,] = useState(props.z);
  const [hover, setHover] = useState(false)
  const [angle,] = useState(props.angle);
  const [link,] = useState(props.link);
  const [scale,] = useState(props.scale !== undefined ? props.scale : 1);
  const [textScale,] = useState(props.textScale !== undefined ? props.textScale : 0.1);
  const [hasFrame,] = useState(props.hasFrame !== undefined ? props.hasFrame : true);
  const [textAlign,] = useState(props.textAlign !== undefined ? props.textAlign : "center");
  const group = useRef();

  const {imageStore} = useStore();

  useEffect(() => {
    group.current.rotateY(angle);
  }, [angle])

  useEffect(() => {
    // Add image to context store
    imageStore.addImage({key: key, idx: -1, totalImages: 0});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Check if link is undefined, hovering over this and check that open live flag is set
    if (link === undefined || imageStore.getHoverKey() !== key || ! imageStore.openLive) return;
    // Reset flag
    imageStore.openLive = false;
    // Open live project in new tab
    window.open(link, '_blank');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageStore.openLive])

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

  const onClick = useCallback((e) => {
    e.stopPropagation()
    // Set as hovered image
    if (imageStore.getHoverKey() === key) {
      imageStore.setHover(null);
    }else {
      imageStore.setHover({key: key, x: x, y: y});
      // Set hovering for highlighting
      setHover(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <group scale={scale} ref={group}>
      {hasFrame && (
      <mesh position={[x, y, z - 0.0011]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={hover ? "orange" : "blue"} />
      </mesh>
      )}
      {/* Cover used to check if this canvas is selected */}
      <mesh onClick={onClick} onPointerMove={onMove} onPointerOut={onOut} position={[x, y, z + 0.01]}>
        <boxGeometry args={[1.1, 1.1, 0.011]} />
        <meshStandardMaterial color={"black"} opacity={0} transparent />
      </mesh>
      <mesh position={[x, y, z - 0.001]}>
        <boxGeometry args={[1.03, 1.03, 0.011]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      <mesh position={[x, y, z]}>
        <boxGeometry args={[1, 1, 0.01]} />
        <meshStandardMaterial color={"#dedede"} />
        <Text fontSize={textScale} maxWidth={1} textAlign={textAlign} position={[0,0,0.008]} color={"#5c5c5c"}>
          {text}
        </Text>
      </mesh>
    </group>
  )
})