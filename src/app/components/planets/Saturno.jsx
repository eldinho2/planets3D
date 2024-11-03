/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: NestaEric (https://sketchfab.com/Nestaeric)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/saturn-c09a1970148c43ad99db134a9d6d00b5
title: Saturn
*/
import React, { useRef, Suspense, useState, useEffect } from "react";
import {
  CameraControls,
  Center,
  Stars,
  useProgress,
  Html,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { usePathname } from "next/navigation";

import Loader from "../Loader";

const SaturnoModel = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/saturn.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.76}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-0.42, Math.PI / 2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Saturn}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.rings}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export const Saturno = ({recentralized}) => {
  const { progress } = useProgress();

  const container = useRef();

  const cameraControlsRef = useRef();

  if (recentralized) {
    cameraControlsRef.current?.reset(true);
  }


  const [audio] = useState(new Audio('SZA - Saturn (Sped Up).mp3'));
  const planetUrl = usePathname()
  console.log(planetUrl)

  useEffect(() => {
    console.log('URL atual:', planetUrl);

    if (planetUrl !== '/saturno') {
      audio.pause();
      audio.currentTime = 0;
      console.log('Saindo de Saturno');
    } else {
      audio.play().catch((error) => {
        console.log('Erro ao tocar áudio:', error);
      });
      console.log('Entrando em Saturno');
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [planetUrl, audio]);



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
          <SaturnoModel />
        </Center>
      </mesh>
    );
  }

  return (
    <div className="h-screen w-screen">
    <Canvas ref={container} camera={{ position: [1.4, 1, 1.4], fov: 60 }} >
      <Suspense fallback={<Loader progress={progress} />}>
        <RotatingObject />
        <ambientLight intensity={0.15} />
        <CameraControls  minDistance={1} maxDistance={10} ref={cameraControlsRef} />
      </Suspense>
    </Canvas>
    </div>
  );
};

useGLTF.preload("/saturn.glb");
