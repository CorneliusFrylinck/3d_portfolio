import { Plank } from "./Plank";

export function StackShack(props) {
  const wall1BaseCoords = {x:-15, z:-25, angleX: 0, angleY: 0, angleZ: 0}
  const wall2BaseCoords = {x:-22, z:-17.5, angleX: 0, angleY: 1.55, angleZ: 0}
  const wall3BaseCoords = {x:-8, z:-17.5, angleX: 0, angleY: 1.55, angleZ: 0}
  const backWall = [
    { 
      x: wall1BaseCoords.x, y: 3.5, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 3, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 2.5, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 2, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 1.5, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 1, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 0.5, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 0, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x, y: 0, z: wall1BaseCoords.z,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: wall1BaseCoords.angleZ
    },
    { 
      x: wall1BaseCoords.x-5, y: 0.3, z: wall1BaseCoords.z+0.15,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: 1.55, scale: 0.3
    },
    { 
      x: wall1BaseCoords.x+5, y: 0.3, z: wall1BaseCoords.z+0.15,
      angleX: wall1BaseCoords.angleX, angleY: wall1BaseCoords.angleY, angleZ: 1.55, scale: 0.3
    }
  ]
  const leftWall = [
    { 
      x: wall2BaseCoords.x, y: 3.5, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 3, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 2.5, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 2, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 1.5, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 1, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 0.5, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 0, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x, y: 0, z: wall2BaseCoords.z, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: wall2BaseCoords.angleZ
    },
    { 
      x: wall2BaseCoords.x+0.15, y: 0.3, z: wall2BaseCoords.z-5, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: 1.55, scale: 0.3
    },
    { 
      x: wall2BaseCoords.x+0.02, y: 0.3, z: wall2BaseCoords.z+5, 
      angleX: wall2BaseCoords.angleX, angleY: wall2BaseCoords.angleY, angleZ: 1.55, scale: 0.3
    }
  ]
  const rightWall = [
    { 
      x: wall3BaseCoords.x, y: 3.5, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 3, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 2.5, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 2, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 1.5, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 1, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 0.5, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 0, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x, y: 0, z: wall3BaseCoords.z, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: wall3BaseCoords.angleZ
    },
    { 
      x: wall3BaseCoords.x-0.02, y: 0.3, z: wall3BaseCoords.z-5, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: 1.55, scale: 0.3
    },
    { 
      x: wall3BaseCoords.x-0.2, y: 0.3, z: wall3BaseCoords.z+5, 
      angleX: wall3BaseCoords.angleX, angleY: wall3BaseCoords.angleY, angleZ: 1.55, scale: 0.3
    }
  ]
  const roof = [
    { 
      x: -15.15, y: 4.2, z: -25, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -24.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -24, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -23.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -23, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -22.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -22, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -21.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -21, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -20.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -20, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -19.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -19, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -18.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -18, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -17.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -17, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -16.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -16, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -15.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -15, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -14.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -14, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -13.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -13, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -12.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -12, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -11.5, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.2, z: -11, 
      angleX: 1.56, angleY: 0, angleZ: 0
    },
    { 
      x: -15.15, y: 4.1, z: -10.6, 
      angleX: 1.56, angleY: 0, angleZ: 0
    }
  ]

  return (
    <>
      {backWall.map(f => 
        <Plank 
          key={Math.random() * 10000000} text={f.text} 
          x={f.x} y={f.y} z={f.z} scale={f.scale} 
          angleX={f.angleX} angleY={f.angleY} angleZ={f.angleZ} 
        />
      )}
      {leftWall.map(f => 
        <Plank 
          key={Math.random() * 10000000} text={f.text} 
          x={f.x} y={f.y} z={f.z} scale={f.scale} 
          angleX={f.angleX} angleY={f.angleY} angleZ={f.angleZ} 
        />
      )}
      {rightWall.map(f => 
        <Plank 
          key={Math.random() * 10000000} text={f.text} 
          x={f.x} y={f.y} z={f.z} scale={f.scale} 
          angleX={f.angleX} angleY={f.angleY} angleZ={f.angleZ} 
        />
      )}
      {roof.map(f => 
        <Plank 
          key={Math.random() * 10000000} text={f.text} 
          x={f.x} y={f.y} z={f.z} scale={f.scale} 
          angleX={f.angleX} angleY={f.angleY} angleZ={f.angleZ} 
        />
      )}
      <Plank 
        key={Math.random() * 10000000} text={"WELCOME TO THE STACK-SHACK!"} 
        x={-15} y={2.8} z={-10} scale={[0.25, 1, 0.25]}
        angleX={0} angleY={0} angleZ={0} 
      />
    </>
  )
}