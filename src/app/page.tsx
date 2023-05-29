'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Terra } from "./components/Terra";
import { Lua } from "./components/Lua";
import { Suspense } from "react";
import styled from "styled-components";
import React, { useState } from "react";

interface WrapperProps {
  grabbing: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;

  canvas {
    height: 400px;
    width: 400px;
    cursor: ${props => (props.grabbing ? 'grabbing' : 'grab')};
  }
`;


export default function Home() {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);

  const handlePageClick = () => {
    setIsGrabbing(!isGrabbing);
  };

  return (
    <Wrapper grabbing={isGrabbing}>
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
                    <ambientLight intensity={0.2} />

          <Center>
            <Terra />
          </Center>
        </Suspense>
      </Canvas>
      <Canvas
        camera={{ position: [30, 10, 10], fov: 60 }}
        className={'canvas'}
        onPointerDown={handlePageClick}
        onPointerUp={handlePageClick}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableRotate={true}
            enablePan={true}
            enableZoom={true}
          />
          <ambientLight intensity={0.2} />
          <Center>
            <Lua />
          </Center>
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}
