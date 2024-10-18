import React from "react";

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



function InfoArea({ name, description, distances, terrentype }: InfoProps) {
  return (
    <div className="text-white">
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        {distances?.map((distance, index) => (
          <div key={index}>
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
                <p>{terrentype}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoArea;
