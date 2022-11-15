import { Pillar } from "./Pillar"

export function PillarManager(props) {

  return (
    <>
      <Pillar 
        key={Math.random() * 10000000}
        x={5.915} y={-0.01} z={10.5} textScale={0.125} scale={0.5}
        angleX={0} angleY={0} angleZ={0} trunkHeight={7} standHeight={7.001} standSize={1} standWidthMultiplier={7}
      />
      <Pillar 
        key={Math.random() * 10000000}
        x={7.715} y={-0.01} z={3.45} textScale={0.125} scale={0.25}
        angleX={0} angleY={0} angleZ={0} trunkHeight={4} standHeight={4.01} standSize={1}
      />
      <Pillar 
        key={Math.random() * 10000000}
        x={12.715} y={-0.01} z={3.45} textScale={0.125} scale={0.3}
        angleX={0} angleY={0} angleZ={0} trunkHeight={6} standHeight={6.01} standSize={1.5}
      />
      <Pillar 
        key={Math.random() * 10000000}
        x={12.915} y={-0.01} z={10.5} textScale={0.125} scale={0.35}
        angleX={0} angleY={0} angleZ={0} trunkHeight={8} standHeight={8.01} standSize={1.3}
      />
    </>
  )
}