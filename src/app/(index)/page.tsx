'use client';

import PlanetInfo from "../components/PlanetInfo";
import React from "react";
import { Barlow_Semi_Condensed } from 'next/font/google';

const barlow_Semi_Condensed = Barlow_Semi_Condensed({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
  
  return (
    <div className={barlow_Semi_Condensed.className}>
      <PlanetInfo planet={'terra'}/>
    </div>
  );
}
