import ImageFrame from "./ImageFrame"
import luxit from '../assets/luxit.png'
import saveTheDate from '../assets/saveTheDate.png'

export function ImageFrameManager() {
  // List of imageFrames
  const images = [
    { 
      text: "Slide show",
      images: [
        luxit,
        saveTheDate
      ],
      key: Math.random() * 10000000,
      link: "",
      index: 0, textScale: 0.4,
      x: 6, y: 0, z: 0, angle: 0
    },
    { 
      text: "Single Image",
      images: [
        luxit
      ],
      key: Math.random() * 10000000,
      link: "",
      index: 1, textScale: 0.4,
      x: 8, y: 0, z: 0, angle: 0
    },
    { 
      text: "Single Image",
      images: [
        saveTheDate
      ],
      key: Math.random() * 10000000,
      link: "",
      index: 2, textScale: 0.4,
      x: 10, y: 0, z: 0, angle: 0
    }
  ]

  return (
    <>
      {images.map(f => 
        <ImageFrame 
          key={f.key} text={f.text} keyProp={f.key}
          x={f.x} y={f.y} z={f.z} index={f.index} textScale={f.textScale}
          angle={f.angle} images={f.images} link={f.link}
        />
      )}
    </>
  )
}