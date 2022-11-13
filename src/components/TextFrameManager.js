import TextFrame from "./TextFrame";

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
      x: -1.215, y: 0.2, z: -21.9, angle: 1.43, hasFrame: false, scale: [1.55, 2.6, 1],
      key: Math.random() * 10000000, textScale: 0.04, textAlign: "Left"
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
      x: -1.6, y: 0.2, z: -2.49, angle: 0, hasFrame: false, scale: [9.5, 2.6, 1],
      key: Math.random() * 10000000, textScale: 0.036, textAlign: "Left"
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
  
Swbugging => Asking Google how to un-break
`,
      x: -0.25, y: 0.2, z: 8.2, angle: -1.67, hasFrame: false, scale: [1.55, 2.6, 1],
      key: Math.random() * 10000000, textScale: 0.04, textAlign: "Left"
    },
    { // Directional Board All
      text: 
`Cornelius Frylinck's Portfolio


Skills & Experience                                Projects
<===============                             =======>







About Me                     Education & Certifications
<========                  =====================>
`,
      x: 0, y: 0, z: 1.4, angle: 0, scale: [2, 1, 1],
      key: Math.random() * 10000000, textScale: 0.04
    },
    { // Directional Board 2
      text: 
`
About Me                               Skills & Experience 
<========                             ===============>
`,
      x: -3, y: 0, z: -8, angle: 1.57, scale: [0.5, 1, 1],
      key: Math.random() * 10000000, textScale: 0.04
    },
    { // Directional Board 3
      text: 
`
Projects                               Education & Certifications
<=======                              =====================>
`,
      x: 3.33, y: 0, z: -7, angle: -1.57, scale: [0.5, 1, 1], 
      key: Math.random() * 10000000, textScale: 0.04
    },
    { // LinkedIn
      text: 
`
Press 'o' to open my LinkedIn account in a new tab.
`,
      key: Math.random() * 10000000,
      link: "https://www.linkedin.com/in/cornelius-frylinck-710698188",
      index: 2, textScale: 0.03,
      x: 3, y: 0, z: 1, angle: 0.1,
    },
    { // GitHub
      text: 
`
Press 'o' to open my GitHub account in a new tab.
`,
      key: Math.random() * 10000000,
      link: "https://github.com/CorneliusFrylinck?tab=repositories",
      index: 2, textScale: 0.03,
      x: -3, y: 0, z: 1, angle: -0.1,
    },
    { // AZ-900
      text: 
`AZ-900 - CLOUD FUNDAMENTALS

My first Azure certification, where I learned the fundamentals of cloud and cloud development.

Press 'o' to view my credential in a new tab.
`,
      key: Math.random() * 10000000,
      link: "https://www.credly.com/badges/40196b25-566f-4b71-9ae4-7d8deb6dc0c1?source=linked_in_profile",
      index: 2, textScale: 0.04,
      x: -11.5, y: 0.115, z: -3.44, angle: 3.143
    },
    { // AZ-900
      text: 
`AZ-204 - ASSOCIATE DEVELOPER

My second Azure certification, where I improved my knowledge of cloud development in Azure.

Press 'o' to view my credential in a new tab.
`,
      key: Math.random() * 10000000,
      link: "https://www.credly.com/badges/e38f77ff-4f9a-4fa6-b8a9-b33b2568932b?source=linked_in_profile",
      index: 2, textScale: 0.03,
      x: -9.5, y: 0.115, z: -3.44, angle: 3.143
    }
  ]
  return (
    <>
      {frames.map(f => 
        <TextFrame 
          key={f.key} text={f.text} link={f.link} idxKey={f.key}
          x={f.x} y={f.y} z={f.z} scale={f.scale} textScale={f.textScale}
          angle={f.angle} hasFrame={f.hasFrame} textAlign={f.textAlign}
        />
      )}
    </>
  )
}