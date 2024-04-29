"use client";
import { TfiInstagram } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";

export default function SocialMedia() {
  return (
    <section>
      <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
          <span class="border-black border-b-4">Síguenos</span> en Redes Sociales
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Mantente actualizado con las últimas noticias y proyectos de Volt
            Conexiones siguiéndonos en nuestras redes sociales.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="https://instagram.com/@"
            target="_blank"
            class="m-4 btn-glass text-white border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            <TfiInstagram />
          </a>
          <a
            href="https://wa.link/#"
            target="_blank"
            class="m-4 btn-glass text-white border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            <SiWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
