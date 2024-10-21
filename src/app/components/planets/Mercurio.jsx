/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: uperesito (https://sketchfab.com/uperesito)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/mercurio-v11-06baa7da7c9743dc9ef0111e1db0e8eb
title: Mercurio v1.1
*/
import React, { useRef, Suspense, useState } from "react";
import {
  CameraControls,
  Center,
  Stars,
  useProgress,
  Html,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import Loader from "../Loader";






const  MercurioModel = (props) => {
  const { nodes, materials } = useGLTF("/mercurio.glb");
  return (
    <group scale={0.01} {...props} dispose={null}>
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

export const Mercurio = ({recentralized}) => {
  const { progress } = useProgress();

  const container = useRef();

  const cameraControlsRef = useRef();

  if (recentralized) {
    cameraControlsRef.current?.reset(true);
  }



  function RotatingObject() {
    const meshRef = useRef();
    const [rotation, setRotation] = useState(0);

    useFrame(() => {
      setRotation((prevRotation) => prevRotation + 0.0005);
      meshRef.current.rotation.y = rotation;
    });

    return (
      <mesh ref={meshRef}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade={true}
        />

        <Center>
          <MercurioModel />
        </Center>
      </mesh>
    );
  }

  return (
    <div className="h-screen w-screen">
    <Canvas ref={container} camera={{ position: [3, 1, 3], fov: 60 }} >
    <Suspense fallback={<Loader progress={progress} />}>
    <CameraControls truck={false} minDistance={2} maxDistance={15} autoRotate ref={cameraControlsRef} />
      <ambientLight intensity={0.2} />
      <RotatingObject />
    </Suspense>
  </Canvas>
  </div>
  )
}

useGLTF.preload("/mercurio.glb");