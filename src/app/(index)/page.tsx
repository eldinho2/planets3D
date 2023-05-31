'use client';

import PlanetInfo from "../components/PlanetInfo";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  
  return (
    <div>
      <PlanetInfo planet={'terra'}/>
    </div>
  );
}
