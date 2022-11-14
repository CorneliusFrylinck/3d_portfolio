import { Pillar } from "./Pillar"

export function PillarManager(props) {

  return (
    <>
      <Pillar 
        key={Math.random() * 10000000}
        x={7.515} y={-0.01} z={6.95} textScale={0.125} scale={0.25}
        angleX={0} angleY={0} angleZ={0} trunkHeight={4} standHeight={4.01}
      />
    </>
  )
}