import React, { Suspense,useEffect,useRef } from "react";
import { Canvas,useFrame} from "@react-three/fiber";
import {OrbitControls,useGLTF,useAnimations} from "@react-three/drei";
import './App.css';


const Scene = () => {

    function Modelh(props) {
        const group = useRef()
        const { nodes, materials, animations } = useGLTF('/modelh.glb')
        const { actions ,names} = useAnimations(animations, group)
          console.log(names);
          useEffect(()=>{
            actions[names[0]].reset().fadeIn(0.5).play();
          },[])
        return (
          <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
              <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="prot(o)-xfbx" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_2">
                    <group name="RootNode">
                      <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <group name="Object_5">
                          <primitive object={nodes._rootJoint} />
                          <group name="Object_85" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <group name="Object_87" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <group name="Object_89" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <group name="Object_91" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <group name="Object_93" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <group name="Object_95" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <group name="Object_97" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <group name="Object_99" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                          <skinnedMesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.Shoes} skeleton={nodes.Object_86.skeleton} />
                          <skinnedMesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.Eyes} skeleton={nodes.Object_88.skeleton} />
                          <skinnedMesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.Hair} skeleton={nodes.Object_90.skeleton} />
                          <skinnedMesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.Jacket} skeleton={nodes.Object_92.skeleton} />
                          <skinnedMesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.Body} skeleton={nodes.Object_94.skeleton} />
                          <skinnedMesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.Pants} skeleton={nodes.Object_96.skeleton} />
                          <skinnedMesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.Mask} skeleton={nodes.Object_98.skeleton} />
                          <skinnedMesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.Shirt} skeleton={nodes.Object_100.skeleton} />
                        </group>
                      </group>
                      <group name="Shoes_Cube015" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <group name="Eyes_Cube014" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <group name="Hair_Cube003" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <group name="Jacket_Cube000" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <group name="Body_Cube013" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <group name="Pants_Cube007" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <group name="Mask_Cube012" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                      <group name="Shirt_Cube002" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        )
      }



    return ( 
<>
        <OrbitControls enablePan={true} enableZoom={true}/>
        <Suspense fallback={null}>
        
          <ambientLight intensity={0.1}/>
          <directionalLight position={[10, 10, 0]} color="red" />
          <pointLight position={[5, 5, 5]} />
          <Modelh />
          </Suspense>

          </>
     );
}
 
export default Scene;