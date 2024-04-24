"use client";
import { TfiInstagram } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="./">
              <img
                src="./images/logo_white_blue.webp"
                alt="Logo VoltConexiones"
              />
            </a>
            <p class="text-sm text-center text-gray-600 pt-3">
              © 2024, Todos los derechos reservados
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 pt-4 lg:pt-0 xl:pt-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              MENÚ
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="./" className="font-light hover:border-b-2 border-cyan-500 cursor-pointer">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#OurServices" className="font-light hover:border-b-2 border-cyan-500 cursor-pointer">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#WorkDone" className="font-light hover:border-b-2 border-cyan-500 cursor-pointer">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#ContactUs" className="font-light hover:border-b-2 border-cyan-500 cursor-pointer">
                  Contactanos
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              REDES SOCIALES
            </h2>
            <div className="gap-4 lg:w-2/5 inline-flex lg:justify-end lg:ml-0 pt-5 lg:pt-0 xl:pt-0">
              <button class="btn-glass text-white border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg flex">
                <a
                  href=""
                  target="_blank"
                  className="text-white hover:text-cyan-500"
                >
                  <TfiInstagram />
                </a>
              </button>
              <button class="btn-glass text-white border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg flex">
                <a
                  href=""
                  target="_blank"
                  className="text-white hover:text-cyan-500"
                >
                  <SiWhatsapp />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="text-xs p-4">
        Desarrollado por{" "}
        <a
          href="http://future-agency.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <b>FUTURE AGENCY</b>
        </a>
      </p>
    </footer>
  );
}
