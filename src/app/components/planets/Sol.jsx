/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: PatelDev (https://sketchfab.com/PatelDev)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/sun-22d690373f704f2295d3456288d71ca5
title: Sun
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
import { Button } from "@/app/components/Button";
import { DrawerDemo } from '../InfoAreaDrawer'


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

export const Sol = ({recentralized}) => {

  const container = useRef();

  const cameraControlsRef = useRef();

  if (recentralized) {
    cameraControlsRef.current?.reset(true);
  }

  function RotatingObject({recentralized}) {
    const meshRef = useRef();
    const [rotation, setRotation] = useState(0);

    useFrame(() => {
      setRotation((prevRotation) => prevRotation + 0.0005);
      meshRef.current.rotation.y = rotation;
    });

    if (recentralized) {
      cameraControlsRef.current?.reset(true);
    }

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
          <SolModel />
        </Center>
      </mesh>
    );
  }

  return (
    <div className="h-screen w-screen">
      <Canvas ref={container} camera={{ position: [4, 1, 4], fov: 60 }} >
        <Suspense fallback={<Loader />}>
        <CameraControls truck={false} minDistance={3} maxDistance={20} ref={cameraControlsRef} />
          <ambientLight intensity={1.2} />
          <RotatingObject />
        </Suspense>
      </Canvas>
   </div>
  )
}


useGLTF.preload("/sun.glb");