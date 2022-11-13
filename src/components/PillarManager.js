import { Pillar } from "./Pillar"

export function PillarManager(props) {

  return (
    <>
    <Pillar 
      key={Math.random() * 10000000}
      x={9.515} y={-0.01} z={1.55} textScale={0.125} scale={0.25}
      angleX={0} angleY={0} angleZ={0} trunkHeight={0.3} standHeight={4.01}
    />
    <Pillar 
      key={Math.random() * 10000000}
      x={15.515} y={-0.01} z={7.05} textScale={0.125} scale={0.25}
      angleX={0} angleY={0} angleZ={0} trunkHeight={0.5} standHeight={7.0}
    />
    <Pillar 
      key={Math.random() * 10000000}
      x={9.515} y={-0.01} z={12.55} textScale={0.125} scale={0.35}
      angleX={0} angleY={0} angleZ={0} trunkHeight={0.5} standHeight={7.05}
    />
    </>
  )
}