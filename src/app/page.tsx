'use client';

import { InfoTerra } from "./components/planetInfos/InfoTerra";
import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  position: relative;
  color: #fff;
  background: transparent;
  max-width: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
      <Wrapper>
          <InfoTerra />
      </Wrapper>  
  );
}
