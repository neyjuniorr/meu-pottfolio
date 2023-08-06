import React from "react";


const Sobre = () => {
  return (
    <div
      name="Sobre"
      className="w-full h-screen bg-gradient-to-b from-blue-500 via-black to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <p className="text-xl mt-5">
          Iniciei minha carreira profissional em uma concessionária de veículos, sempre mostrando bons resultados e crescendo com o decorrer do tempo e com os desafios que me eram propostos. Passei por todas as áreas até chegar no cargo de consultor técnico cuidando de todo o processo de pós-vendas. 
        </p>

        <br />

        <p className="text-xl">
          No entanto, decidi seguir meu sonho de me tornar um programador porque sempre admirei e tive vontade de contribuir com essa área que cresce tanto no mundo. Abaixo seguem as tecnologias que estou me aprimorando. 
        </p>
       
      </div>
    </div>
  );
};

export default Sobre;