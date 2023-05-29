'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Terra } from "./components/Terra";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Canvas>
        <OrbitControls enableZoom={true}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense>
          <Terra />
        </Suspense>
      </Canvas>
    </main>
  );
}
