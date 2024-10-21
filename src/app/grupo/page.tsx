'use client';

import { Barlow_Semi_Condensed } from 'next/font/google';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const barlow_Semi_Condensed = Barlow_Semi_Condensed({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function Grupo() {
  const [isLaunching, setIsLaunching] = useState(false);
  const [isTrembling, setIsTrembling] = useState(false);
  const router = useRouter();

  const handleLaunch = () => {
    setIsLaunching(true);
    setIsTrembling(true);
    setTimeout(() => {
      setIsTrembling(false);
      router.push('/');
    }, 1500);
  };

  return (
    <div className={`${barlow_Semi_Condensed.className}`}>
      <div className={`min-h-screen bg-black text-white p-8 flex flex-col items-center justify-between overflow-y-auto h-screen overflow-x-hidden ${isTrembling ? 'animate-tremble' : ''}`}>
        <header className="text-center max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            BEM-VINDO AO NOSSO UNIVERSO EM 3D! 🌍 ✨
          </h1>
          <p className="text-lg md:text-xl mb-8">
            ESTE SITE É PARTE DO NOSSO TRABALHO DE CIÊNCIAS - CONTEÚDO E MÉTODO 1 - ASTRONOMIA, ORIENTADO PELO PROFESSOR ANDRÉ MICALDAS. AQUI, VOCÊ PODE EXPLORAR O SISTEMA SOLAR DE UMA FORMA INTERATIVA E CONHECER MAIS SOBRE OS PLANETAS: DESDE OS ROCHOSOS ATÉ OS GASOSOS. VAMOS MOSTRAR SUAS CARACTERÍSTICAS PRINCIPAIS E INFORMAÇÕES GERAIS SOBRE CADA UM DELES.
          </p>
        </header>

        <main className="flex flex-col items-center my-2">
          <p className="text-2xl md:text-3xl italic mb-4">
            Pronto para viajar pelos mistérios do cosmos? 🚀🪐
          </p>
          <button
            onClick={handleLaunch}
            className={`
              bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg
              transition-all duration-300 transform hover:scale-105
              ${isLaunching ? 'animate-pulse' : ''}
              relative overflow-hidden
            `}
            disabled={isLaunching}    
          >
            {isLaunching ? 'Decolando!' : 'Viajar'}
            {isLaunching && (
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                🚀
              </span>
            )}
          </button>
        </main>

        <footer>
          <p className="mb-2">PARTICIPANTES DO GRUPO: JULIA DE AGUIAR, MARIA EDUARDA RIBEIRO E SARA TEIXEIRA</p>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">REFERÊNCIAS BIBLIOGRÁFICAS:</h2>
            <ul className="text-sm space-y-2">
              {[
                { nome: "Sol", url: "https://pt.wikipedia.org/wiki/Sol" },
                { nome: "Mercúrio (planeta)", url: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)" },
                { nome: "Vênus (planeta)", url: "https://pt.wikipedia.org/wiki/V%C3%AAnus_(planeta)" },
                { nome: "Terra", url: "https://pt.wikipedia.org/wiki/Terra" },
                { nome: "Lua", url: "https://pt.wikipedia.org/wiki/Lua" },
                { nome: "Marte (planeta)", url: "https://pt.wikipedia.org/wiki/Marte_(planeta)" },
                { nome: "Júpiter (planeta)", url: "https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)" },
                { nome: "Saturno (planeta)", url: "https://pt.wikipedia.org/wiki/Saturno_(planeta)" },
                { nome: "Urano (planeta)", url: "https://pt.wikipedia.org/wiki/Urano_(planeta)" },
                { nome: "Netuno (planeta)", url: "https://pt.wikipedia.org/wiki/Netuno_(planeta)" },
              ].map(({ nome, url }) => (
                <li key={nome}>
                  {nome}, In: Wikipédia, a enciclopédia livre, Disponível em:{" "}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                  , Acesso em: 18 de outubro de 2024.
                </li>
              ))}
            </ul>
          </div>
        </footer>

        <div className="fixed top-4 left-4">
          <img src="/groupPageCats/saturno.png?height=100&width=100" alt="Saturn" className="w-24 h-24 object-contain transform scale-x-[-1] sm:hidden md:hidden" />
        </div>
        <div className="fixed bottom-4 left-4">
          <img src="/groupPageCats/gatonauta.png" alt="Cat astronaut" className="w-36 h-36 sm:hidden md:hidden" />
        </div>
        <div className="fixed top-4 right-4">
          <img src="/groupPageCats/venus.png?height=100&width=100" alt="Mars or Venus" className="w-24 h-24 object-contain sm:hidden md:hidden" />
        </div>
        <div className="fixed bottom-4 right-4">
          <img src="/groupPageCats/nautinha.png" alt="Cat looking at moon" className="w-36 h-36 sm:hidden md:hidden" />
        </div>
      </div>
      <style jsx global>{`
@keyframes shake {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  10% { transform: translate(1px, -3px) rotate(-0.5deg); }
  20% { transform: translate(-1px, -5px) rotate(0.5deg); }
  30% { transform: translate(1px, -2px) rotate(0deg); }
  40% { transform: translate(-1px, -4px) rotate(0.5deg); }
  50% { transform: translate(1px, -6px) rotate(-0.5deg); }
  60% { transform: translate(-1px, -3px) rotate(0deg); }
  70% { transform: translate(1px, -5px) rotate(-0.5deg); }
  80% { transform: translate(-1px, -2px) rotate(0.5deg); }
  90% { transform: translate(1px, -4px) rotate(0deg); }
  100% { transform: translate(0px, 0px) rotate(-0.5deg); }
}

.animate-tremble {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
  animation-iteration-count: infinite;
}
      `}</style>
    </div>
  );
}