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
import styled from "styled-components";

const RecentralizeButton = styled.div`
span {
  position: relative;
  top: 280px;
  left: 119px;
  border: 1px solid grey;
  padding: 5px;
  background-color: black;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
}
`;

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
}
const TerraModel = (props) => {
  const { nodes, materials } = useGLTF("/terra-transformed.glb");
  return (
    <group {...props} dispose={null}>
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

  const cameraControlsRef = useRef();

  const handleRecentralize = () => {
    cameraControlsRef.current?.reset(true);
  };

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
          <RecentralizeButton onClick={handleRecentralize}>
            <span>Recentralizar</span>
          </RecentralizeButton>
        </Html>
        <Center>
          <TerraModel />
        </Center>
      </mesh>
    );
  }

  return(
    <Canvas camera={{ position: [30, 7, 10], fov: 60 }} className={"canvas"}>
      <Suspense fallback={<Loader />}>
        <RotatingObject />
        <CameraControls truck={false} ref={cameraControlsRef} />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/terra-transformed.glb");
