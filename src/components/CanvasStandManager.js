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
      <CanvasStand 
        key={Math.random() * 10000000}
        x={11.515} y={-0.01} z={10.57} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={0} angleZ={0} 
      />
      <CanvasStand 
        key={Math.random() * 10000000}
        x={9.515} y={-0.01} z={10.57} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={0} angleZ={0} 
      />
      <CanvasStand 
        key={Math.random() * 10000000}
        x={7.515} y={-0.01} z={10.57} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={0} angleZ={0} 
      />
      <CanvasStand 
        key={Math.random() * 10000000}
        x={13.015} y={-0.01} z={7.3} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={1.575} angleZ={0} 
      />
      <CanvasStand 
        key={Math.random() * 10000000}
        x={9.015} y={-0.01} z={3.1} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={3.16} angleZ={0} 
      />
      {/* ABOUT ME BOARD */}
      <CanvasStand 
        key={Math.random() * 10000000}
        x={-12.489} y={-0.01} z={6.4} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={-1.575} angleZ={0} 
      />
      {/* WEDDING */}
      <CanvasStand 
        key={Math.random() * 10000000}
        x={-12.889} y={-0.01} z={3.68} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={-1.575} angleZ={0} 
      />
      {/* Me */}
      <CanvasStand 
        key={Math.random() * 10000000}
        x={-12.889} y={-0.01} z={9.14} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={-1.575} angleZ={0} 
      />
      {/* Strongman */}
      <CanvasStand 
        key={Math.random() * 10000000}
        x={-9.589} y={-0.01} z={10.84} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={0} angleZ={0} 
      />
      {/* Truck */}
      <CanvasStand 
        key={Math.random() * 10000000}
        x={-9.589} y={-0.01} z={2.84} textScale={0.125} scale={[0.45, 0.25, 0.25]}
        angleX={0} angleY={3.14} angleZ={0} 
      />
    </>
  )
}