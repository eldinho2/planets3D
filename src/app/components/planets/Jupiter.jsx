/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 jupternew.glb --transform
Author: murilo.kleine (https://sketchfab.com/murilo.kleine)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/jupiter-free-downloadable-model-61671f29ca0a4fa39dc9653290282418
Title: Jupiter - Free Downloadable Model
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
  
  @media (max-width: 768px) {
    left: 10px;
  }
}
`;

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
}


const JupiterModel = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/jupternew-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.Armature_rootJoint} />
        <skinnedMesh name="JUPITER_0" geometry={nodes.JUPITER_0.geometry} material={materials.JUPITER} skeleton={nodes.JUPITER_0.skeleton} scale={1} />
      </group>
    </group>
  )
}

export const Jupiter = () => {

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
          <JupiterModel />
        </Center>
      </mesh>
    );
  }

  return (
    <Canvas camera={{ position: [3.5, -0.3, 3.5], fov: 60 }} >
    <Suspense fallback={<Loader />}>
      <RotatingObject />
      <ambientLight intensity={0.5} />
      <CameraControls truck={false} minDistance={3} maxDistance={20} ref={cameraControlsRef} />
    </Suspense>
  </Canvas>
  )
}

useGLTF.preload('/jupternew-transformed.glb')
