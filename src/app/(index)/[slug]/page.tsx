'use client';

import PlanetInfo from "../../components/PlanetInfo";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Barlow_Semi_Condensed } from 'next/font/google';

const barlow_Semi_Condensed = Barlow_Semi_Condensed({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function Planet() {
  const [planet, setPlanet] = useState('');
  const planetURL = usePathname();

  useEffect (() => {
    setPlanet(planetURL);
  }, [planetURL]);

  return (
    <div className={barlow_Semi_Condensed.className}>
      <PlanetInfo planet={planet}/>
    </div>
  );
}
