/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: uperesito (https://sketchfab.com/uperesito)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/mercurio-v11-06baa7da7c9743dc9ef0111e1db0e8eb
title: Mercurio v1.1
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

const  MercurioModel = (props) => {
  const { nodes, materials } = useGLTF("/mercurio.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material}
        />
      </group>
    </group>
  );
}

export const Mercurio = () => {
  return (
    <Canvas camera={{ position: [250, 130, 250], fov: 60 }} className={"canvas"}>
    <Suspense fallback={<Loader />}>
      <OrbitControls
        enableRotate={true}
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
      <ambientLight intensity={0.2} />
      <Sparkles count={5000} scale={1111 * 2} size={1} speed={0.4}>
          <MercurioModel />
      </Sparkles>
    </Suspense>
  </Canvas>
  )
}

useGLTF.preload("/mercurio.glb");