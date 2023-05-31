import { Terra } from "../planets/Terra";
import styled from "styled-components";
import PlanetSelector from "../PlanetSelector";

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

  > div {
    font-family: var(--font-bellefair);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    background: transparent;
    width: 60rem;
  }
`;


export const InfoTerra = () => {
  return (
    <InfosTerra>
      <Terra />
      <div>
        <PlanetSelector />
        <h1>Terra</h1>
        <p>Massa: 5,972 × 10^24 kg</p>
        <p>Diâmetro: 12.742 km</p>
      </div>
    </InfosTerra>
  );
};

