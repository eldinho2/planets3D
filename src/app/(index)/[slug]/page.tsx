'use client';

import PlanetInfo from "../../components/PlanetInfo";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Planet() {
  const [planet, setPlanet] = useState('');
  const planetURL = usePathname();

  useEffect (() => {
    setPlanet(planetURL);
  }, [planetURL]);

  return (
    <div>
      <PlanetInfo planet={planet}/>
    </div>
  );
}
