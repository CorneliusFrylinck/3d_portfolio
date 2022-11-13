import { TextFrame } from "./TextFrame";

export function TextFrameManager(props) {
  const frames = [
    { // Current Stack
      text: 
`Junior Software Engineer at Agile Bridge
1 March 2022 - Current


MAIN PROJECT: Derivco's UserVerification System

STACK:
FRONTEND: React, TypeScript, BUI components, Jumio
BACKEND: .NET Core 6, Integrations with Jumio
  and multiple Derivco APIs, Azure, SQL Server, Kafka

ARCHITECTURE: Clean Architecture
`,
      x: -1.215, y: 0.2, z: -21.9, angle: 1.43, hasFrame: false, scale: [1.55, 2.6, 1], textScale: 0.04, textAlign: "Left"
    },
    { // Previous Stack
      text: 
`  Junior Software Developer/Junior Analyst at iPlan
  30 November 2021 - 28 February 2022


  BIGGEST PROJECT: Rhodes Food Group Veg Intake System

  STACK:
  FRONTEND: SYSPRO, Xamarin, WPF
  BACKEND: .NET Core 5, VB Script, SQL Server
`,
      x: -1.6, y: 0.2, z: -2.49, angle: 0, hasFrame: false, scale: [9.5, 2.6, 1], textScale: 0.036, textAlign: "Left"
    },
    { // Other Skills
      text: 
`PHP => Only used for university and personal purposed.

MAUI => Used in projects at Agile Bridge Show & Tells.

Angular => Used for university and for one work-related 
  task.

Intent Architect => Learned and started using for the 
  UserVerification system, however it was decided not to 
  use it any further.
`,
      x: -0.25, y: 0.2, z: 8.2, angle: -1.67, hasFrame: false, scale: [1.55, 2.6, 1], textScale: 0.04, textAlign: "Left"
    },
    { // Directional Board All
      text: 
`Cornelius Frylinck's Portfolio


Skills & Experience                                Projects
<===============                             =======>







About Me                     Education & Certifications
<========                  =====================>
`,
      x: 0, y: 0, z: 1.4, angle: 0, scale: [2, 1, 1], textScale: 0.04
    },
    { // Directional Board 2
      text: 
`
About Me                               Skills & Experience 
<========                             ===============>
`,
      x: -3, y: 0, z: -8, angle: 1.57, scale: [0.5, 1, 1], textScale: 0.04
    },
    { // Directional Board 3
      text: 
`
Projects                               Education & Certifications
<=======                              =====================>
`,
      x: 3.33, y: 0, z: -7, angle: -1.57, scale: [0.5, 1, 1], textScale: 0.04
    }
  ]
  return (
    <>
      {frames.map(f => 
        <TextFrame 
          key={Math.random() * 10000000} text={f.text} 
          x={f.x} y={f.y} z={f.z} scale={f.scale} textScale={f.textScale}
          angle={f.angle} hasFrame={f.hasFrame} textAlign={f.textAlign}
        />
      )}
    </>
  )
}