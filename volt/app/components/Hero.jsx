"use client";
import { SlEnergy } from "react-icons/sl";
import { GoLightBulb } from "react-icons/go";


export default function Hero() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            Soluciones Eléctricas Personalizadas
            <br className="hidden lg:inline-block" />
            antes de que necesites encender la luz
          </h1>
          <p className="mb-8 leading-relaxed">
            Entendemos que cada espacio es único. Por eso, adaptamos nuestras
            soluciones a las necesidades específicas de tu negocio, asegurando
            un servicio eficiente y de máxima calidad.
          </p>
          <div className="flex justify-center align-middle">
            <button className="uppercase btn-glass-pill inline-flex bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <SlEnergy className="mt-1 me-2" />Descubre Más
            </button>
            <button className="uppercase btn-glass-pill ml-4 inline-flex bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <GoLightBulb className="mt-1 me-2"/>Contáctanos
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600/F3F4F7/8693ac"
          />
        </div>
      </div>
    </section>
  );
}
