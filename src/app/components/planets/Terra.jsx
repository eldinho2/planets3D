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
import { Button } from "@/app/components/Button";


function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
}
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

export const Terra = () => {
  const [isfull, setFull] = useState(false);
  const container = useRef();

  const cameraControlsRef = useRef();

  const handleRecentralize = () => {
    cameraControlsRef.current?.reset(true);
  };

  const handleFullScreen = () => {
    if (!isfull) {
      container.current.requestFullscreen();
      container.current.requestPointerLock();
      setFull(true);
    } else {
      document.exitFullscreen();
      setFull(false);
    }
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
        <Html>
          <Button onClick={handleRecentralize}>
            <span>Recentralizar</span>
          </Button>
          <Button onClick={handleFullScreen}>
            <span>Tela inteira</span>
          </Button>
        </Html>
        <Center>
          <TerraModel />
        </Center>
      </mesh>
    );
  }

  return(
    <div className="container">
    <Canvas ref={container} camera={{ position: [1, 0.10, 1], fov: 60 }}>
      <Suspense fallback={<Loader />}>
        <RotatingObject />
        <CameraControls truck={false} minDistance={1} maxDistance={10} ref={cameraControlsRef} />
      </Suspense>
    </Canvas>
    </div>
  );
};

useGLTF.preload("/terra-transformed.glb");
