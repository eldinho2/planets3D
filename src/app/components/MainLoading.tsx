import React, { useState, useEffect } from 'react'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const curiosidadesEspaciais = [
    {titulo: 'O SOL PERDE 4 MILHÕES DE TONELADAS POR SEGUNDO',
     detalhes: "O Sol perde cerca de 4 milhões de toneladas de massa a cada segundo devido à fusão nuclear. Apesar disso, sua massa é tão grande que continuará brilhando por bilhões de anos."},
    {titulo: 'HÁ UM HEXÁGONO GIGANTE NO POLO NORTE DE SATURNO',
     detalhes: 'Saturno tem uma formação hexagonal misteriosa em seu polo norte, com cerca de 25.000 km de diâmetro. Cientistas ainda não entendem completamente como essa estrutura se formou e se mantém.'},
    {titulo: 'EXISTEM MAIS ÁRVORES NA TERRA DO QUE ESTRELAS NA VIA LÁCTEA',
     detalhes: "Estima-se que existam cerca de 3 trilhões de árvores na Terra, enquanto a Via Láctea contém aproximadamente 100 a 400 bilhões de estrelas."},
    {titulo: 'UM ANO EM NETUNO DURA 165 ANOS TERRESTRES',
     detalhes: 'Netuno, o planeta mais distante do Sol em nosso sistema solar, leva cerca de 165 anos terrestres para completar uma órbita ao redor do Sol.'},
    {titulo: 'O MAIOR VULCÃO CONHECIDO DO SISTEMA SOLAR ESTÁ EM MARTE',
     detalhes: "O Monte Olimpo em Marte é o maior vulcão conhecido no sistema solar, com uma altura de aproximadamente 21,9 km e uma base de 600 km de diâmetro."},
    {titulo: 'HÁ UM AROMA DE FRAMBOESA NO ESPAÇO',
     detalhes: "Astrônomos descobriram que o centro da nossa galáxia contém uma substância chamada etil formiato, que dá às framboesas seu aroma característico."},
    {titulo: 'A LUZ DO SOL LEVA 8 MINUTOS PARA CHEGAR À TERRA',
     detalhes: "A luz viaja a uma velocidade de aproximadamente 300.000 km/s, mas mesmo a essa velocidade, leva cerca de 8 minutos para percorrer a distância entre o Sol e a Terra."},
]

export default function Loading() {
    const [progress, setProgress] = useState(0);
    const [randomNum, setRandom] = useState('carregando');
    useEffect(() => {
        setRandom(Math.floor(Math.random() * 6).toString());
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    return 100;
                }
                const newProgress = oldProgress + 1;
                return Math.min(newProgress, 100);
            });
        }, 20);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={`fixed inset-0 bg-zinc-900 z-50 flex flex-col justify-center items-center text-white text-center ${spaceGrotesk.className}`}>
            <div className="mb-4">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-white text-2xl mb-2">Carregando: {progress}%</div>
            <div className="w-48 h-3 bg-gray-800 rounded-full mt-2 mb-4">
                <div
                    className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            {randomNum !== 'carregando' && 
                <div className='w-[90%] lg:w-[50%] mx-auto mt-5'>
                    <p className='text-xs mb-2'>VOCÊ SABIA?</p>
                    <p className='text-sm mb-2 font-bold'>{curiosidadesEspaciais[randomNum as unknown as number].titulo}</p>
                    <p className='text-sm'>{curiosidadesEspaciais[randomNum as unknown as number].detalhes}</p>
                </div>
            }
        </div>
    );
}
