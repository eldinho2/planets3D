/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/neptune-947a405a0a4348f9a49ff4bd3ed3cc4b
title: Neptune
*/
import React, { useRef, Suspense } from "react";
import {
  OrbitControls,
  Center,
  Sparkles,
  useProgress,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
}

const NetunoModel = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/neptuneglb.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="NeptuneFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Neptune" rotation={[-1.83, 0, 0]} scale={3.9}>
                  <mesh
                    name="Neptune_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Neptune_01_-_Default_0"].geometry}
                    material={materials["01_-_Default"]}
                  />
                </group>
                <group
                  name="Triton"
                  rotation={[-1.62, -0.26, 1.39]}
                  scale={0.25}
                >
                  <mesh
                    name="Triton_02_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Triton_02_-_Default_0"].geometry}
                    material={materials["02_-_Default"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export const Netuno = () => {
  return (
    <Canvas camera={{ position: [911, 191, 111], fov: 60 }} className={"canvas"}>
    <Suspense fallback={<Loader />}>
      <OrbitControls
        enableRotate={true}
        enablePan={true}
        enableZoom={true}
        autoRotate
        autoRotateSpeed={0.3}
      />
      <ambientLight intensity={3.2} />
      <Sparkles count={5000} scale={1111 * 2} size={1} speed={0.4}>
        <Center>
          <NetunoModel />
        </Center>
      </Sparkles>
    </Suspense>
  </Canvas>
  )
}

useGLTF.preload("/neptuneglb.glb");