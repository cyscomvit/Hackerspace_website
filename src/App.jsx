import React, { Suspense,useEffect,useRef } from "react";
import { Canvas,useFrame} from "@react-three/fiber";
import {OrbitControls,useGLTF,useAnimations} from "@react-three/drei";
import './App.css';
import Scene from "./Scene";

export default function App() {
  return (
    <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows={true} camera={{fov:100,position:[-1,1,4]}}>
        <Scene/>
      </Canvas>
    </div>
  );
}
