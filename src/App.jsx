import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import './App.css';
import Scene from "./Scene";
import Navbar from './components/navBar/nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speaker from './components/speaker/Speakers'
import Faq from './components/faq/faq'
import Clock from './components/clock/Clock'
import Sponsors from './components/sponsors/sponsors'
import Footer from './components/footer/Footer'
import About from './components/about/AboutPage'

export default function App() {
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      {/* for now commenting the model */}
      {/* <Canvas shadows={true} camera={{fov:100,position:[-1,1,4]}}> */}
      {/* <Scene/> */}
      {/* </Canvas> */}
      {/* <Navbar currentPage="1" /> */}
      {/* <Speaker /> */}
      {/* <Faq /> */}
      {/* <Clock /> */}
      {/* <Sponsors /> */}
      {/* <About /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar currentPage='1' /><Footer urlb='/' urlf='/about'/></>} />
          <Route path='about' element={<><Navbar currentPage='2' /><About /><Footer urlb='/' urlf='/speaker' /></>} />
          <Route path='speaker' element={<><Navbar currentPage='3' /><Speaker /><Footer urlb='/about' urlf='/sponsors'/></>} />
          <Route path='sponsors' element={<><Navbar currentPage='4' /><Sponsors /><Footer urlb='/speaker' urlf='/faq'/></>} />
          <Route path='faq' element={<><Navbar currentPage='5' /><Faq /><Footer urlb='/sponsors' urlf='faq' /></>} />
          <Route path='clock' element={<Clock />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

const View1 = () => {
  <>
    <Navbar currentPage='1'/>
    <Speaker />
    <Footer />
  </>
}
