import { Terra } from "../planets/Terra";
import styled from "styled-components";
import PlanetSelector from "../PlanetSelector";
import InfoArea from "../InfoArea";

const InfosTerra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  width: 100vw;
  flex: 1;
  background-image: url("https://coolwallpapers.me/picsup/5257154-sky-night-star-milky-way-purple-dark-black-galaxy-night-sky-night-photography-astrophotography-fujifilm-background-wallpaper-space-universe-public-domain-images.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const eath = {
  name: "Terra",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  distances: [
    {
      distanciaApartirdaTerra: "",
      tempoDeViagem: "",
      distanciaApartirDoSol: "",
      diametro: "12,742",
    }
  ]
}

export const InfoTerra = () => {
  return (
    <InfosTerra>
      <Terra />
      <div>
        <PlanetSelector />
        <InfoArea
          name="Terra"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit
           Consequatur necessitatibus debitis commodi omnis, eveniet error cum mod
           i, accusamus nesciunt odio, accusantium similique. Sit provident quod cum
           que dolorem sed laborum ut?"
           distances={
            [
              "Distância do Sol: 149.600.000 km",
              
            ]
           }
        />
      </div>
    </InfosTerra>
  );
};
