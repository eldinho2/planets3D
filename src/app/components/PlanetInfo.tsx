import styled from "styled-components";
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

interface PlanetInfoProps {
  planet: string;
}

export const InfoPlanets = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  width: 100vw;
  flex: 1;
  background-image: url("https://varotti.vteximg.com.br/arquivos/ids/172671-1000-1000/35590_MDF-Preto-Trama-Duratex_6mm.jpg?v=637149455215770000");
  background-repeat: no-repeat;
  background-size: cover;

    media screen and (max-width: 768px) {
      flex-direction: column;
    }
  `;

type PlanetComponents = {
  [key: string]: JSX.Element;
}

export const PlanetInfo = ({ planet }: PlanetInfoProps) => {
  const planetFormated = planet.split("/").join("");

  const planetComponents: PlanetComponents = {
    sol: <Sol />,
    mercurio: <Mercurio />,
    venus: <Venus />,
    terra: <Terra />,
    lua: <Lua />,
    marte: <Marte />,
    jupiter: <Jupiter />,
    saturno: <Saturno />,
    urano: <Urano />,
    netuno: <Netuno />,
  };
  
  const Planet = planetComponents[planetFormated];
  const planetData = planets.find((planetData) => planetData.name === planetFormated.charAt(0).toUpperCase() + planetFormated.slice(1));
  
  
  return (
    <InfoPlanets>
      {Planet}
      <div>
        <PlanetSelector />
        <InfoArea
          name={planetData?.ptName ? planetData?.ptName : planetData?.name}
          description={planetData?.description}
          distances={planetData?.distances}
          terrentype={planetData?.terrentype}
        />
      </div>
    </InfoPlanets>
  );
};

export default PlanetInfo;