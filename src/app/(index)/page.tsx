'use client';

import PlanetInfo from "../components/PlanetInfo";
import MainLoading from "../components/MainLoading";
import React, { useState, useEffect } from "react";
import { Barlow_Semi_Condensed } from 'next/font/google';

const barlow_Semi_Condensed = Barlow_Semi_Condensed({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!hasLoaded) {
      const randomNum = Math.floor(Math.random() * 3) + 2;
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasLoaded(true);
      }, randomNum * 1000);

      return () => clearTimeout(timer);
    }
  }, [hasLoaded]);

  if (isLoading) {
    return <MainLoading />;
  }

  return (
    <div className={barlow_Semi_Condensed.className}>
      <PlanetInfo planet={'terra'} />
    </div>
  );
}
