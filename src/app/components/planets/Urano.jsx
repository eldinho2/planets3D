/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Topson_Noble (https://sketchfab.com/Topson_Noble)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/planet-uranus-2b9de21987c6419ebe72df19e9c4163a
title: Planet Uranus
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





const UranoModel = (props) => {
  const { nodes, materials } = useGLTF("/uranodraco.gltf");
  return (
    <group scale={0.001} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-1.7, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0_3.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0_2.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0_1.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0_7.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0_5.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0_4.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Esfera_Mat1_0_6.geometry}
              material={materials["Mat.1"]}
            />
          </group>
          <group rotation={[0.14, 0, 0]}>
            <group position={[-450, 50, 0]} rotation={[-0.27, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plano_Mat_0.geometry}
                material={materials.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export const Urano = ({recentralized}) => {
  const container = useRef();
  const { progress } = useProgress();

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
          <UranoModel />
        </Center>
      </mesh>
    );
  }

  return (
    <div className="h-screen w-screen">
    <Canvas ref={container} camera={{ position: [1, 1, 1], fov: 60 }}>
      <Suspense fallback={<Loader progress={progress} />}>
        <RotatingObject />
        <ambientLight intensity={2.2} />
        <CameraControls  minDistance={0.40} maxDistance={10} ref={cameraControlsRef} />
      </Suspense>
    </Canvas>
    </div>
  )
}

useGLTF.preload("/uranodraco.gltf");