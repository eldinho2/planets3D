'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Sparkles, useProgress, Html} from "@react-three/drei";
import { Perf } from "r3f-perf";
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
  background-color: #000;
  color: #fff;

  canvas {
    height: 400px;
    width: 400px;
    cursor: ${props => (props.grabbing ? 'grabbing' : 'grab')};
  }
`;

function Loader() {
  const { progress} = useProgress()
  return <Html center>{progress.toFixed(2)} % loaded</Html>
}

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
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableRotate={false}
            enablePan={false}
            enableZoom={false}
            autoRotate autoRotateSpeed={0.3}
          />
          <ambientLight intensity={0.2} />
          <Perf position="top-left" />
          <Sparkles count={1000} scale={1111 * 2} size={1} speed={0.4}>
            <Center>
              <Terra />
            </Center>
          </Sparkles>
        </Suspense>
      </Canvas>
      <Canvas
        camera={{ position: [2, 2, 2], fov: 60 }}
        className={'canvas'}
        onPointerDown={handlePageClick}
        onPointerUp={handlePageClick}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableRotate={false}
            enablePan={false}
            enableZoom={false}
            autoRotate autoRotateSpeed={0.3}
          />
          <ambientLight intensity={0.2} />
          <Perf position="bottom-left" />
          <Sparkles count={1000} scale={1111 * 2} size={1} speed={0.4}>
          <Center>
            <Lua />
          </Center>
          </ Sparkles>
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}
