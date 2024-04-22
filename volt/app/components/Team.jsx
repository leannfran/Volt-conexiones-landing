"use client";

export default function Team() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            Nuestro equipo está compuesto por profesionales altamente
            cualificados y dedicados a proporcionar soluciones eléctricas
            eficientes y seguras.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Exequiel Abuin
                </h2>
                <h3 className="text-gray-500 mb-3">Fundador</h3>
                <p className="mb-4">
                  Especializado en instalaciones industriales, Exequiel tiene
                  más de 15 años de experiencia asegurando la calidad y
                  eficiencia en todos nuestros proyectos.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v5H6a2 2 0 00-2 2v3a5 5 0 002 4h3v-7h3v7h3a5 5 0 002-4v-3a2 2 0 00-2-2h-4V7a2 2 0 012-2h3v3h2V2z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
