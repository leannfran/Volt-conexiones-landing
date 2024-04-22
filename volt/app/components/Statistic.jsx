"use client";
import { SiGooglecalendar } from "react-icons/si";
import { SiNounproject } from "react-icons/si";
import { GiPartyPopper } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";

export default function Statistic() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Nuestra calidad de trabajo habla por sí solo
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Estamos presente en la industria petrolera, marítima, manufacturera, negocios, oficinas y hogares.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg card-glass">
            <SiGooglecalendar class="text-indigo-500 w-12 h-12 mb-3 inline-block"/>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                10+ Años
              </h2>
              <p class="leading-relaxed text-gray-400">Experiencia</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg card-glass">
            <SiNounproject class="text-indigo-500 w-20 h-12 mb-3 inline-block"/>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                500+
              </h2>
              <p class="leading-relaxed text-gray-400">Proyectos Completados</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg card-glass">
            <GiPartyPopper class="text-indigo-500 w-12 h-12 mb-3 inline-block"/>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                300+
              </h2>
              <p class="leading-relaxed text-gray-400">Clientes Satisfechos</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg card-glass">
            <FaRegHeart class="text-indigo-500 w-12 h-12 mb-3 inline-block"/>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                100%
              </h2>
              <p class="leading-relaxed text-gray-400">Clientes que recomiendan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
