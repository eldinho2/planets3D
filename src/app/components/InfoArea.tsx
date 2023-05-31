import React from 'react'
import styled from 'styled-components'

interface InfoProps {
  name: string
  description: string
  distances: string[]
}

const InfoAreaWrapper = styled.div`
  div {
    font-family: var(--font-bellefair);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    background: transparent;
    width: 60rem;
  }

  h1 {
    font-size: 10rem;
  }

  p {
    color: #a1a4b7;
    font-size: 1.2rem;
  }
`;

const InfoDistance = styled.div`
  display: flex;
`;

function InfoArea({ name, description, distances}: InfoProps) {
  return (
    <InfoAreaWrapper>
      <h1>{name}</h1>
      <p>{description}</p>
      <InfoDistance>
        {distances.map((distance) => (
          <div key={distance}>
            <p>{distance}</p>
          </div>
        ))}
      </InfoDistance>
    </InfoAreaWrapper>
  )
}

export default InfoArea;