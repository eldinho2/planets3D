import React from "react";
import styled from "styled-components";

interface InfoProps {
  name?: string;
  description?: string;
  distances?: {
    distanciaApartirdaTerra: string;
    tempoDeViagem: string;
    distanciaApartirDoSol: string;
    diametro: string;
  }[];
  terrentype?: string;
}

const InfoAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 40rem;
  }

  h1 {
    font-size: 10rem;
  }

  .description {
    color: #a1a4b7;
    font-size: 1.2rem;
    text-align: center;
    max-width: 30rem;
    margin-bottom: 2rem;
  }

    @media (max-width: 768px) {
      h1 {
        font-size: 3rem;
        margin-top: 1rem;
      }

      .description {
        color: #a1a4b7;
        max-width: 300px;
        font-size: 1rem;
      }
    }
`;

const InfoDistance = styled.div`
  .distances {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    max-width: 50rem;
    padding: 1rem;
  }

  div {
    text-align: center;
  }

  .distances div h2 {
    font-size: 1rem;
  }


  border-top: 1px solid #a1a4b7;

  @media (max-width: 768px) {
    max-width: 15rem;

    .distances {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      max-width: 20rem;
    }

    div {
      width: 100%;
    }

    .distances div h2 {
      font-size: 0.8rem;
    }
  }
`;

function InfoArea({ name, description, distances, terrentype }: InfoProps) {
  return (
    <InfoAreaWrapper>
      <h1>{name}</h1>
      <p className="description">{description}</p>
      <InfoDistance>
        {distances?.map((distance, index) => (
          <div className="distances" key={index}>
              <div>
                <h2>Distancia Media a partir da Terra</h2>
                <p>{distance.distanciaApartirdaTerra ? distance.distanciaApartirdaTerra : 'N/A'} KM</p>
              </div>
              <div>
                <h2>Distancia Media a partir do Sol</h2>
                <p>{distance.distanciaApartirDoSol ? distance.distanciaApartirDoSol : 'N/A'} KM</p>
              </div>
              <div>
                <h2>Tempo de Viagem</h2>
                <p>{distance.tempoDeViagem ? distance.tempoDeViagem : 'N/A'}</p>
              </div>
              <div>
                <h2>Diametro</h2>
                <p>{distance.diametro ? distance.diametro : 'N/A'} KM</p>
              </div>
              <div>
                <h2>Tipo de Terreno</h2>
                <p className="terrenType">{terrentype}</p>
              </div>
          </div>
        ))}
      </InfoDistance>
    </InfoAreaWrapper>
  );
}

export default InfoArea;
