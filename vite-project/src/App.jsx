// QORA: #373737
// QIZIL:
import { useState } from 'react'
import React from 'react'
import Home from './Components/Home'
import Vector from './Images/Vector.svg'
import greenVector from './Images/Vector2.svg'
import Krasovka1 from './Images/Krasovka1.png'
import Arrow from './Images/Arrow 3.png'
import Star from './Images/Star 1.png'
import Krasovka2 from './Images/Ellipse 10.png'
import Krasovka3 from './Images/Ellipse 11.png'
import Krasovka4 from './Images/Ellipse 12.png'
import Qizil from './Images/QizilKrasovka-removebg-preview.png'
import Qora from './Images/11-30-removebg-preview.png'
import redVector from './Images/qizilVector.svg'
import blackVector from './Images/qoraVector.svg'


function App() {

  const [vc, setVc] = useState("Vector2") 
  const [ignor, setIgnor] = useState(Krasovka1)
  const [krasovka, setKrasovka] = useState("krasovka1")
  const [vector, setVector] = useState(greenVector)
  const [body, setBody] = useState("Nmaddr")
  const [stylee, setStylee] = useState("bring_green")
  const [spann, setSpann] = useState("span1")
  const [nimadir, setNimadir] = useState("H4_3_green")
  const [cs, setCs] = useState("btn2")

  const FirstChange = () => {
    if(ignor == Qora) {
      setBody("Nmaddr")
      setKrasovka("ChapgaSybalsya3")
      setTimeout(() => {
        setIgnor(Krasovka1)
        setStylee("bring_green")
        setKrasovka("krasovka1")
        setCs("btn2")
        setNimadir("H4_3_green")
        setSpann("span1")
        setTimeout(() => {
          setVc("Vector2Rotate")
        }, 1000)
        setVc("Vector2")
        setVector(greenVector)
      }, 2000)
    }
    if(ignor == Qizil) {
      setBody("Nmaddr")
      setKrasovka("ChapgaSybalsya3")
      setTimeout(() => {
        setIgnor(Krasovka1)
        setNimadir("H4_3_green")
        setSpann("span1")
        setCs("btn2")
        setVector(greenVector)
        setTimeout(() => {
          setVc("Vector2Rotate")
        }, 1000)
        setVc("Vector2")
        setKrasovka("krasovka1")
        setStylee("bring_green")
      }, 2000)
    }
  }
  const SecondChange = () => {
    if(ignor == Krasovka1) {
      setBody("Nmaddr2")
      setKrasovka("ChapgaSybalsya1")
      setTimeout(() => {
        setSpann("span2")
        setIgnor(Qizil)
        setVc("redVC")
        setNimadir("H4_3_red")
        setStylee("bring_red")
        setKrasovka("krasovkaa2")
        setCs("btn2_red")
        setVector(redVector)
      }, 2000)
    }
    if(ignor == Qora) {
      setBody("Nmaddr2")
      setKrasovka("ChapgaSybalsya3")
      setTimeout(() => {
        setSpann("span2")
        setIgnor(Qizil)
        setCs("btn2_red")
        setVc("redVC")
        setNimadir("H4_3_red")
        setStylee("bring_red")
        setKrasovka("krasovkaa2")
        setVector(redVector)
      }, 2000)
    }
  }
  const ThirdChange = () => {
    if(ignor == Krasovka1) {
      setBody("Nmaddr3")
      setKrasovka("ChapgaSybalsya1")
      setTimeout(() => {
        setIgnor(Qora)
        setCs("btn2_black")
        setSpann("span3")
        setNimadir("H4_3_black")
        setStylee("bring_black")
        setVector(blackVector)
        setVc("blackVC")
        setKrasovka("krasovkaa3")
      }, 2000)
    }
    if(ignor == Qizil) {
      setBody("Nmaddr3")
      setKrasovka("ChapgaSybalsya3")
      setTimeout(() => {
        setIgnor(Qora)
        setVector(blackVector)
        setCs("btn2_black")
        setStylee("bring_black")
        setSpann("span3")
        setNimadir("H4_3_black")
        setVc("blackVC")
        setKrasovka("krasovkaa3")
      }, 2000)
    }
  }
  return (
    <div className={body}>
      <img src={Vector} alt="" className='Vector'/>
      <div className='Group36'>
        <p className='Home'>Home</p>
        <p className='Product'>Product</p>
        <p className='About'>About</p>
        <p className='Review'>Review</p>
      </div>
      <button className='button1'>Shop now</button>
      <h1 className={stylee}>BRING POWER TO YOUR STEPS.</h1>
      <img src={vector} alt=""  className={vc} />
      <h1 className='Walk'>Walk the line.</h1>
      <h4 className='H4_1'>Now that you have a ready strategy to move forward, it's time to come up with some ideas.</h4>
      <h4 className='H4_2'>Now that you have a <span className={spann}><b>ready strategy</b></span> to move forward, </h4>
      <h1 className={nimadir}><strong>Price : $125    <span className='cheg'>$169</span> </strong></h1>
      <button className={cs}>Shop now</button>
      <button className='btn3'>Learn more</button>
      <p className='k1'>70k</p>
      <p className='k3'>CUSTOMERS</p>
      <p className='k2'>17k</p>
      <p className='k4'>REVIEW</p>
      <img src={ignor} className={krasovka} alt="" />
      <img src={Arrow} alt="" className='arrow'/>
      <img src={Star} className='Star'/>
      <p className='off'>25%</p>
      <p className='sale'>OFF</p>
      <div className='posledniy'>
        <div className='perviy'>
          <img src={Krasovka2} className='odin' alt="" onClick={FirstChange}/>
        </div>
        <div className='vtoroy'>
          <img src={Krasovka3} className='dva' alt="" onClick={SecondChange}/>
        </div>
        <div className='tretiy'>
          <img src={Krasovka4} className='tri' alt="" onClick={ThirdChange}/>
        </div>
      </div>
    </div>
  )
}

export default App
