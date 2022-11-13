import ImageFrame from "./ImageFrame"
import luxit from '../assets/luxit.png'
import saveTheDate from '../assets/saveTheDate.png'
import oldPortfolio from '../assets/oldPortfolio.png'
import corlinckActivities from '../assets/corlinckActivities.png'

export function ImageFrameManager() {
  // List of imageFrames
  const images = [
    { // Luxit
      text: 
`LUXIT LEGAL BILL

A PHP & BootStrap project designed to assist lawyers and legal cost consultants by making it quicker and easier to create a "Bill of Cost".
Unfortunately due to clashing schedules me and the cost consultant I was working with on this project weren't able to complete the project, but it was still a great learning experience for me.

I no longer have access to the account I created this project on originally, so I have created a new project and added it there.

Press 'g' to open the Github project in a new tab.
`,
      images: [
        luxit
      ],
      key: Math.random() * 10000000,
      repoLink: "https://github.com/CorneliusFrylinck/LuxitLegalBill",
      index: 0, textScale: 0.04,
      x: 6, y: 0.115, z: 0, angle: 0
    },
    { // Save The Date
      text: 
`SAVE THE DATE

While working at iPlan, my wedding date was set to 20 September 2021.
To handle the wedding invitations, I decided to build a website with .Net Core and Razor pages.

The project is no longer live as it was hosted on Azure and got a bit expensive.

Press 'g' to open the Github project in a new tab.`,
      images: [
        saveTheDate
      ],
      key: Math.random() * 10000000,
      repoLink: "https://github.com/CorneliusFrylinck/SaveTheDate",
      index: 1, textScale: 0.04,
      x: 8, y: 0.115, z: 0, angle: 0
    },
    { // Old portfolio
      text: 
`FIRST PORTFOLIO

The Portfolio I created during my final year of university. It was my second attempt at using React and helped me get my first job and my current job.

Press 'g' to open the Github project in a new tab.
Press 'o' to open the project in a new tab.
`,
      images: [
        oldPortfolio
      ],
      key: Math.random() * 10000000,
      repoLink: "https://github.com/CorneliusFrylinck/Portfolio",
      liveLink: "https://corneliusfrylinck.netlify.app",
      index: 2, textScale: 0.04,
      x: 10, y: 0.115, z: 0, angle: 0
    },
    { // Reactivities
      text: 
`REACTIVITIES

Starting my job at Agile Bridge, I felt a bit overwhelmed at first as the rest of the team kept using terms I wasn't familiar with, which made it hard to keep up.
Since we didn't have the UserVerification (UV) project signed off yet, my team lead gave me and the other new members of the team a list of topics that were important to know so we could study up on it before we started with development.
Searching on Udemy, I found a course that covered nearly all topics we would be working with for the UV project. This is the project I built with that course, covering a wide variety of topics including CLEAN architecture, SignalR, React,... etc.
Though a course can't make a master, it gave me the basics I needed to do well in my job, and from there on I kept gaining experience, learning new things and improving on existing skills.

Press 'g' to open the Github project in a new tab.
Press 'o' to open the project in a new tab.
`,
      images: [
        corlinckActivities
      ],
      key: Math.random() * 10000000,
      repoLink: "https://github.com/CorneliusFrylinck/Reactivities",
      liveLink: "https://corlinck-activities.herokuapp.com/",
      index: 2, textScale: 0.03,
      x: 12, y: 0.115, z: 0, angle: 0
    }
  ]

  return (
    <>
      {images.map(f => 
        <ImageFrame 
          key={f.key} text={f.text} keyProp={f.key}
          x={f.x} y={f.y} z={f.z} index={f.index} textScale={f.textScale}
          angle={f.angle} images={f.images} repoLink={f.repoLink} liveLink={f.liveLink}
        />
      )}
    </>
  )
}