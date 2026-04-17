import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import './index.css'
import img from './assets/fly.png'

const App = () => {
  // const boxRef = useRef();

  // useGSAP(()=>{
  //   gsap.to(boxRef.current,{
  //     rotate:720,
  //     duration:1,
  //     delay:1
  //   })
  // })

  // const container = useRef()

  // useGSAP(()=>{
  //   gsap.to(".box",{
  //     rotate:360,
  //     duration:1,
  //     delay:1
  //   })
  // },{scope:container})

  // const [circle, setCircle] = useState(0)
  // const random = gsap.utils.random(-500,500,100)
  // useGSAP(()=>{
  //   gsap.to(".circle",{
  //     x:circle,
  //     duration:0.5
  //   })
  // },[circle])

  const randomX = gsap.utils.random(-500,500,100);
  const rotateX = gsap.utils.random(-360, 360, 30);
  const randomY = gsap.utils.random(-500, 599, 100);
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [roti, setRoti] = useState(0);
  const imgRef = useRef();
  useGSAP(()=>{
    gsap.to(imgRef.current,{
      x:xValue,
      y:yValue,
      duration:1,
      rotate:roti
    })
  },{scope:'main',dependencies:[xValue, rotateX, yValue]})
  // },[xValue, rotateX, yValue])
  return (
    <main>
     {/* <div ref={container} className="container">
      <div className="circle"></div>
      <div ref={boxRef} className="box"></div>
      <div className="box"></div>
     </div>
     <div className="kuch">
      <div className="circle"></div>
      <div className="box"></div>
     </div> */}
     {/* <button onClick={()=>{
      setCircle(random)
     }}>Animate</button> */}
     <img onClick={()=>{
      setRoti(rotateX)
      setXValue(randomX)
      setYValue(randomY)
     }} ref={imgRef} src={img} alt="fly png" />
    </main>
  )
}

export default App