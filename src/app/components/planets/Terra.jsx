/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: matousekfoto (https://sketchfab.com/matousekfoto)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-globe-98d2b04d46474bafb4250cc75dc583b3
title: Earth Globe 🌍
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



const TerraModel = (props) => {
  const { nodes, materials } = useGLTF("/terra-transformed.glb");
  return (
    <group scale={0.05} {...props} dispose={null}>
      <mesh
        receiveShadow={true}
        geometry={nodes.meshNode_Material_u2_v1_0.geometry}
        material={materials.Material_u2_v1}
        position={[-5.18, -20.68, 0]}
        rotation={[-Math.PI / 2, 0.46, Math.PI]}
      />
      <mesh
        receiveShadow={true}
        geometry={nodes.meshNode_Material_u1_v1_0.geometry}
        material={materials.Material_u1_v1}
        position={[-5.18, -20.68, 0]}
        rotation={[-Math.PI / 2, 0.46, Math.PI]}
      />
      <mesh
        receiveShadow={true}
        geometry={nodes.meshNode_Material_u1_v2_0.geometry}
        material={materials.Material_u1_v2}
        position={[-5.18, -20.68, 0]}
        rotation={[-Math.PI / 2, 0.46, Math.PI]}
      />
    </group>
  );
};

export const Terra = ({recentralized}) => {  
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
          <TerraModel />
        </Center>
      </mesh>
    );
  }

  return(
    <div className="h-screen w-screen">
    <Canvas ref={container} camera={{ position: [1, 0.10, 1], fov: 60 }}>
      <Suspense fallback={<Loader progress={progress} />}>
        <RotatingObject />
        <CameraControls  minDistance={1} maxDistance={10} ref={cameraControlsRef} />
      </Suspense>
    </Canvas>
    </div>
  );
};

useGLTF.preload("/terra-transformed.glb");
