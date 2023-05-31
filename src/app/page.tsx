'use client';

import { InfoTerra } from "./components/planetInfos/InfoTerra";
import styled from "styled-components";
import React from "react";

const Wapper = styled.div`

`;

export default function Home() {
  return (
    <Wapper>
          <InfoTerra />
    </Wapper>
  );
}
