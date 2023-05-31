import React from 'react';
import styled from 'styled-components';

const PlanetSelectorWrapper = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    font-size: 1.5rem;
    font-weight: 200;
    margin: 0px 24px;
  }

  li {
    cursor: pointer;
    padding-bottom: 5px;
    position: relative;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #f9f9f9;
        transition: transform 0.3s ease-in-out;
        transform: scaleX(1);
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

function PlanetSelector() {
  return (
    <PlanetSelectorWrapper>
      <ul>
        <li>Mercúrio</li>
        <li>Vênus</li>
        <li>Terra</li>
        <li>Lua</li>
        <li>Marte</li>
        <li>Júpiter</li>
        <li>Saturno</li>
        <li>Urano</li>
        <li>Netuno</li>
      </ul>
    </PlanetSelectorWrapper>
  );
}

export default PlanetSelector;
