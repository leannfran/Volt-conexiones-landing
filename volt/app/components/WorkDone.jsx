"use client";

export default function WorkDone() { 
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-5 mx-auto">
          <div className="text-center mb-20">
          <h2 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Trabajos Realizados</h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">Un vistazo a algunos de nuestros proyectos más destacados y lo que nuestros clientes tienen que decir sobre ellos.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El proyecto</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Renovación de Instalaciones Eléctricas</h1>
                  <p className="leading-relaxed">Este proyecto implicó una completa renovación de las instalaciones eléctricas de una fábrica, aumentando la eficiencia y seguridad de las operaciones.</p>
                  <div className="mt-4">
                    <span className="title-font font-medium text-2xl text-gray-900">4.8</span>
                    <span className="text-gray-600 text-sm ml-1">/5 estrellas (34 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El proyecto</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Instalación de Sistema de Automatización</h1>
                  <p className="leading-relaxed">Se implementó un avanzado sistema de automatización para mejorar la productividad y control de un complejo comercial.</p>
                  <div className="mt-4">
                    <span className="title-font font-medium text-2xl text-gray-900">5.0</span>
                    <span className="text-gray-600 text-sm ml-1">/5 estrellas (22 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El proyecto</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Actualización del Sistema Eléctrico</h1>
                  <p className="leading-relaxed">Actualización completa del sistema eléctrico de un hotel para cumplir con las normativas actuales y mejorar la eficiencia energética.</p>
                  <div className="mt-4">
                    <span className="title-font font-medium text-2xl text-gray-900">4.5</span>
                    <span className="text-gray-600 text-sm ml-1">/5 estrellas (19 reseñas)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
 };