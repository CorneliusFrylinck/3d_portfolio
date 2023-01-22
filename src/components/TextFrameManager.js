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
      x: -3.845, y: 0.2, z: -21.9, angle: 1.43, hasFrame: false, scale: [0.5, 2.6, 1],
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
      x: -5.16, y: 0.2, z: -2.49, angle: 0, hasFrame: false, scale: [3, 2.6, 1],
      key: Math.random() * 10000000, textScale: 0.036, textAlign: "Left"
    },
    { // Other Skills
      text: 
`PHP => Only used for university and personal purposes.

MAUI => Used in projects at Agile Bridge Show & Tells.

Angular => Used for university and for one work-related 
  task.

Intent Architect => Learned and started using for the 
  UserVerification system, however it was decided not to 
  use it any further.
  
Debugging => Asking Google how to un-break
`,
      x: -0.7, y: 0.2, z: 8.2, angle: -1.67, hasFrame: false, scale: [0.5, 2.6, 1],
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
      x: 0, y: 0, z: 1.4, angle: 0, scale: [1.3, 1, 1],
      key: Math.random() * 10000000, textScale: 0.04
    },
    { // Directional Board 2
      text: 
`
About Me                               Skills & Experience 
<========                             ===============>
`,
      x: -6, y: 0, z: -8, angle: 1.57, scale: [0.25, 1, 1],
      key: Math.random() * 10000000, textScale: 0.04
    },
    { // Directional Board 3
      text: 
`
Projects                               Education & Certifications
<=======                              =====================>
`,
      x: 6.7, y: 0, z: -7, angle: -1.57, scale: [0.25, 1, 1], 
      key: Math.random() * 10000000, textScale: 0.04
    },
    { // LinkedIn
      text: 
`
Press 'o' to open my LinkedIn account in a new tab.
`,
      mobileText: "Click to open my LinkedIn account in a new tab.",
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
      mobileText: "Click to open my Github account in a new tab.",
      key: Math.random() * 10000000,
      link: "https://github.com/CorneliusFrylinck?tab=repositories",
      index: 2, textScale: 0.03,
      x: -3, y: 0, z: 1, angle: -0.1,
    },
    { // AZ-900
      text: 
`AZ-900 - CLOUD FUNDAMENTALS

My first Azure certification, where I learned the fundamentals of cloud and cloud development.

Reason for writing: To improve related knowledge for my current position.

Press 'o' to view my credential in a new tab.
`,
      key: Math.random() * 10000000,
      link: "https://www.credly.com/badges/40196b25-566f-4b71-9ae4-7d8deb6dc0c1?source=linked_in_profile",
      index: 2, textScale: 0.04,
      x: -9.5, y: 0.115, z: -3.44, angle: 3.143
    },
    { // AZ-204
      text: 
`AZ-204 - ASSOCIATE DEVELOPER

My second Azure certification, where I improved my knowledge of cloud development in Azure.

Reason for writing: To improve related knowledge for my current position.

Press 'o' to view my credential in a new tab.
`,
      key: Math.random() * 10000000,
      link: "https://www.credly.com/badges/e38f77ff-4f9a-4fa6-b8a9-b33b2568932b?source=linked_in_profile",
      index: 2, textScale: 0.04,
      x: -7.5, y: 0.115, z: -3.44, angle: 3.143
    },
    { // IBM CLOUD APP DEVELOPER
      text: 
`IBM 2019 CLOUD APPLICATION DEVELOPER

Badge obtained by completing IBM's full-stack course on cloud development with NodeJS and React.

Reason for writing: While studying at university, I did what I could to improve my knowledge and practical experience after hours.

Press 'o' to view my credential in a new tab.
`,
      key: Math.random() * 10000000,
      link: "https://www.credly.com/badges/2cfb5ea0-2258-40e0-aa04-0b530bf28bed?source=linked_in_profile",
      index: 2, textScale: 0.04,
      x: -11.5, y: 0.115, z: -3.44, angle: 3.143
    },
    { // Matric
      text: 
`MATRIC

Graduated at Höer Volkskool in 2015.

Chosen subjects for grade 10-12:
- Information Technology
- Accounting
- Economy

First language: Afrikaans
First additional language: English
`,
      key: Math.random() * 10000000,
      index: 2, textScale: 0.04,
      x: 9.015, y: 0.115, z: 2.1865, angle: 0
    },
    { // University
      text: 
`UNIVERSITY

Graduated at the North-West University, Potchefstroom Campus in 2020.

Degree obtained:
Bachelors of Science in Information Technology.
`,
      key: Math.random() * 10000000,
      index: 2, textScale: 0.04, scale: [0.18, 1, 1],
      x: 13.075, y: 0.115, z: -13.1465, angle: -1.625
    },
    { // Small Certificates
      text: 
`C# Related Certifications

CodInGame:
C# Problem Solving

LinkedIn:
Design Patterns 1, Complete guide to building an app with .Net Core and React, Advanced Web APIs with .Net 6, ASP.Net Security, C# Advanced Principles, ASP.Net Core: Middleware, C# Delegates, Events and Lambdas, Microservices Foundations, ASP.Net Core: Payment Gateways, Advanced ASP.Net Web API 2.2, Learning SignalR with ASP.Net Core, `,
      key: Math.random() * 10000000,
      index: 2, textScale: 0.04, scale: [0.18, 1, 1],
      x: 10.575, y: 0.115, z: -13.1465, angle: -1.625
    },
    { // Directional Board 2
      text: 
`
ABOUT ME

Cornelius Frylinck, Intermediate Software Engineer............................
Age: 25....................................................................................................

Country of birth: South Africa................................................................
Date of birth: 8 September 1997...........................................................
Married since 20 September 2021 to Julia Frylinck.............................

Hobbies:
Language learning: took German for a semester at university,........... 
and currently learning Dutch............................................................
Gaming: currently playing Craftopia,......................................................
Grim Dawn and Vampire Survivors.................................................
Exercise: competed in strongman competitions from 2013-2018.......
Watching anime: favorite anime of all time is Overlord.........................
Chess: I have been playing chess since primary school, .....................
and still enjoy it today......................................................................
`,
      x: -10.965, y: 0.115, z: -12.5, angle: 1.57, scale: [0.25, 1, 1],
      key: Math.random() * 10000000, textScale: 0.03
    }
  ]
  return (
    <>
      {frames.map(f => 
        <TextFrame 
          key={f.key} text={f.text} mobileText={f.mobileText} link={f.link} idxKey={f.key}
          x={f.x} y={f.y} z={f.z} scale={f.scale} textScale={f.textScale}
          angle={f.angle} hasFrame={f.hasFrame} textAlign={f.textAlign}
        />
      )}
    </>
  )
}