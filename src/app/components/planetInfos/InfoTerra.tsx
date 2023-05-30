import { Terra } from "../planets/Terra";
import styled from "styled-components";

const InfosTerra = styled.div`
  position: relative;
  color: #fff;
  background: transparent;
  max-width: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const InfoTerra = () => {
  return (
    <InfosTerra>
      <Terra />
      <div>
        aaaaaaaaaaaa
      </div>
    </InfosTerra>
  );
};

