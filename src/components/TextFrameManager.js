import { TextFrame } from "./TextFrame";

export function TextFrameManager(props) {
  const frames = [
    { 
      text: "One of these things just doesn't belong here",
      x: 0, y: 0, z: 0, angle: 0
    },
    { 
      text: "One of these things just doesn't belong here",
      x: 1.5, y: 0, z: -0.1, angle: -0.1
    },
    { 
      text: "One of these things just doesn't belong here",
      x: -1.5, y: 0, z: -0.1, angle: 0.1
    }
  ]
  return (
    <>
      {frames.map(f => 
        <TextFrame key={Math.random() * 10000000} text={f.text} x={f.x} y={f.y} z={f.z} angle={f.angle} />
      )}
    </>
  )
}