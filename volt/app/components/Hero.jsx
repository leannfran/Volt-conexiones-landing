"use client";
import { SlEnergy } from "react-icons/sl";
import { GoLightBulb } from "react-icons/go";

export default function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div class="cover">
        {/* INICIO WAVE */}
        <div class="bg_color"></div>
        <div class="wave w1"></div>
        <div class="wave w2"></div>
        {/* FINAL WAVE */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              <strong className="text-cyan-500">Soluciones Eléctricas</strong> Personalizadas <br className="lg:hidden" />
              <br className="hidden lg:inline-block" />
              antes de que necesites encender la luz
            </h1>
            <p className="mb-8 leading-relaxed text-gray-50">
              Entendemos que cada espacio es único. Por eso, adaptamos nuestras
              soluciones a las necesidades específicas de tu negocio, asegurando
              un servicio eficiente y de máxima calidad.
            </p>
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 text-center">
              <a className="uppercase btn-glass-pill inline-flex border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-black hover:font-bold font-bold">
                <SlEnergy className="mt-1 me-2 hover:text-yellow-400" />
                Descubre Más
              </a>
              <a className="ml-0 md:ml-4 mt-4 md:mt-0 uppercase rounded-full inline-flex border-0 py-2 px-6 focus:outline-none bg-cyan-500 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:text-black hover:font-bold font-bold">
                <GoLightBulb className="mt-1 me-2 hover:text-yellow-400" />
                Contáctanos
              </a>
            </div>
          </div>
          <div className="container__vector lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Trabajos de VoltConexiones"
              src="./images/Hero.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}