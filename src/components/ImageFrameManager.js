import ImageFrame from "./ImageFrame"
import luxit from '../assets/luxit.png'
import saveTheDate from '../assets/saveTheDate.png'

export function ImageFrameManager() {
  // List of imageFrames to create
  const images = [
    { 
      text: "Slide show",
      images: [
        luxit,
        saveTheDate
      ],
      key: Math.random() * 10000000,
      link: "",
      index: 0,
      x: 0, y: 0, z: 0, angle: 0
    },
    { 
      text: "Single Image",
      images: [
        luxit
      ],
      key: Math.random() * 10000000,
      link: "",
      index: 1,
      x: 1.5, y: 0, z: -0.1, angle: -0.1
    },
    { 
      text: "Single Image",
      images: [
        saveTheDate
      ],
      key: Math.random() * 10000000,
      link: "",
      index: 2,
      x: -1.5, y: 0, z: -0.1, angle: 0.1
    }
  ]

  return (
    <>
      {images.map(f => 
        <ImageFrame 
          key={f.key} text={f.text} keyProp={f.key}
          x={f.x} y={f.y} z={f.z} index={f.index}
          angle={f.angle} images={f.images} link={f.link}
        />
      )}
    </>
  )
}