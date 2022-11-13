import { CanvasStand } from "./CanvasStand"

export function CanvasStandManager(props) {

  return (
    <>
      <CanvasStand 
        key={Math.random() * 10000000}
        x={8.015} y={-0.01} z={-10} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={3.16} angleZ={0} 
      />
      <CanvasStand 
        key={Math.random() * 10000000}
        x={6.015} y={-0.01} z={-10} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={3.16} angleZ={0} 
      />
      <CanvasStand 
        key={Math.random() * 10000000}
        x={10.015} y={-0.01} z={-10} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={3.16} angleZ={0} 
      />
      <CanvasStand 
        key={Math.random() * 10000000}
        x={12.015} y={-0.01} z={-10} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={3.16} angleZ={0} 
      />
    </>
  )
}