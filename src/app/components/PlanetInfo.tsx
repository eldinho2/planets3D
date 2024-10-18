import PlanetSelector from "./PlanetSelector";
import InfoArea from "./InfoArea";
import { Sol } from "./planets/Sol";
import { Mercurio } from "./planets/Mercurio";
import { Venus } from "./planets/Venus";
import { Terra } from "./planets/Terra";
import { Lua } from "./planets/Lua";
import { Marte } from "./planets/Marte";
import { Jupiter } from "./planets/Jupiter";
import { Saturno } from "./planets/Saturno";
import { Urano } from "./planets/Urano";
import { Netuno } from "./planets/Netuno";

import { planets } from "@/app/data/planetInfos.js"

import { PlanetInfoDrawer } from './InfoAreaDrawer';
import { useState } from "react";
import { Button } from "@/components/ui/button"
interface PlanetInfoProps {
  planet: string;
}


type PlanetComponents = {
  [key: string]: JSX.Element;
}

export const PlanetInfo = ({ planet }: PlanetInfoProps) => {
  const [recentralized, setRecentralized] = useState(false);
  const planetFormated = planet.split("/").join("");

  const handleRecentralize = () => {
    setRecentralized(true);
    setTimeout(() => {
      setRecentralized(false);
    }, 10);
  };

  const planetComponents: PlanetComponents = {
    sol: <Sol recentralized={recentralized} />,
    mercurio: <Mercurio recentralized={recentralized} />,
    venus: <Venus recentralized={recentralized} />,
    terra: <Terra recentralized={recentralized} />,
    lua: <Lua recentralized={recentralized} />,
    marte: <Marte recentralized={recentralized} />,
    jupiter: <Jupiter recentralized={recentralized} />,
    saturno: <Saturno recentralized={recentralized} />,
    urano: <Urano recentralized={recentralized} />,
    netuno: <Netuno recentralized={recentralized} />,
  };
  
  const Planet = planetComponents[planetFormated];
  const planetData = planets.find((planetData) => planetData.name === planetFormated.charAt(0).toUpperCase() + planetFormated.slice(1));
  
  
  return (
    <div className="h-screen sm:w-3/5">
      {Planet}
      <PlanetSelector />
      <Button onClick={handleRecentralize} variant="outline" className="absolute bottom-20 right-5 z-10">
          <span>Recentralizar</span>
      </Button>
      <PlanetInfoDrawer
        name={planetData?.ptName ? planetData?.ptName : planetData?.name || ''}
        description={planetData?.description || ''}
        distances={planetData?.distances || []}
        terrentype={planetData?.terrentype || ''}
      />
    </div>
  );
};

export default PlanetInfo;