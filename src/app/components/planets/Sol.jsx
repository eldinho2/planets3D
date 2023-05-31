/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: PatelDev (https://sketchfab.com/PatelDev)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/sun-22d690373f704f2295d3456288d71ca5
title: Sun
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

const SolModel = (props) => {
  const { nodes, materials } = useGLTF("/sun.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={2.63}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Scene_-_Root"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export const Sol = () => {
  return (
    <Canvas camera={{ position: [2, 2, 2], fov: 60 }} className={"canvas"}>
    <Suspense fallback={<Loader />}>
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
      <ambientLight intensity={0.2} />
      <Sparkles count={1000} scale={1111 * 2} size={1} speed={0.4}>
          <SolModel />
      </Sparkles>
    </Suspense>
  </Canvas>
  )
}


useGLTF.preload("/sun.glb");