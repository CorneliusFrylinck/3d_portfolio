import { Plank } from "./Plank";

export function StackShack(props) {
  const planks = [
    { 
      x: 0, y: 3, z: 0, angle: 0
    },
    { 
      x: 1.5, y: 3, z: -0.1, angle: -0.1
    },
    { 
      text: "One of these things just doesn't belong here",
      x: -1.5, y: 3, z: -0.1, angle: 0.1
    }
  ]
  return (
    <>
      {planks.map(f => 
        <Plank 
          key={Math.random() * 10000000} text={f.text} 
          x={f.x} y={f.y} z={f.z} 
          angle={f.angle} 
        />
      )}
    </>
  )
}