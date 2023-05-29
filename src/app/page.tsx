'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Terra } from "./components/Terra";
import { Suspense } from "react";
import styled from "styled-components";
import React, { useState } from "react";

interface WrapperProps {
  grabbing: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  background-color: #1f1144;

  canvas {
    height: 100vh;
    cursor: ${props => (props.grabbing ? 'grabbing' : 'grab')};
  }
`;

export default function Home() {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  const handlePageClick = () => {
    setIsGrabbing(!isGrabbing);
  };

  return (
    <Wrapper grabbing={isGrabbing}>
      {isloading ? (
          <h1>Carregando...</h1>
      ) : (
        <Canvas
        camera={{ position: [30, 10, 10], fov: 60 }}
        className={'canvas'}
        onPointerDown={handlePageClick}
        onPointerUp={handlePageClick}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableRotate={true}
            enablePan={false}
            enableZoom={false}
          />
          <Center>
            <Terra />
          </Center>
        </Suspense>
      </Canvas>
      )}
    </Wrapper>
  );
}
