import React from "react";
import styled from "styled-components";
import Link from "next/link";

const PlanetSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 20px;

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: 200;
    margin: 0px 24px;
  }

  a {
    text-decoration: none;
    color: #f9f9f9;
  }

  li {
    cursor: pointer;
    padding-bottom: 5px;
    position: relative;

    &:hover {
      color: #a1a4b7;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #a1a4b7;
        transition: transform 0.3s ease-in-out;
        transform: scaleX(1);
      }
    }

    &::after {
      content: "";
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

  @media (max-width: 768px) {
    position: relative;
    top: 11px;
    left: 0px;
    ul {
      gap: 0.5rem;
      font-size: 0.5rem;
    }
  }
`;

function PlanetSelector() {
  return (
    <PlanetSelectorWrapper>
      <ul>
        <Link href="/sol">
          <li>Sol</li>
        </Link>
        <Link href="/mercurio">
          <li>Mercúrio</li>
        </Link>
        <Link href="/venus">
          <li>Vênus</li>
        </Link>
        <Link href="/">
          <li>Terra</li>
        </Link>
        <Link href="/lua">
          <li>Lua</li>
        </Link>
        <Link href="/marte">
          <li>Marte</li>
        </Link>
        <Link href="/jupiter">
          <li>Júpiter</li>
        </Link>
        <Link href="/saturno">
          <li>Saturno</li>
        </Link>
        <Link href="/urano">
          <li>Urano</li>
        </Link>
        <Link href="/netuno">
          <li>Netuno</li>
        </Link>
      </ul>
    </PlanetSelectorWrapper>
  );
}

export default PlanetSelector;
