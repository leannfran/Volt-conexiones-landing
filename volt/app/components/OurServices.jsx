"use client";

export default function OurServices() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            Explora la variedad de servicios eléctricos que ofrecemos, diseñados
            para garantizar la eficiencia y seguridad de tus instalaciones.
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="./images/instalacionymantenimiento.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-cyan-custom mt-5 card-glass-pill text-center p-3">
              Instalación y Mantenimiento
            </h2>
            <p className="text-base leading-relaxed mt-2 text-gray-400">
              Servicios completos de instalación y mantenimiento para asegurar
              el máximo rendimiento y seguridad de tus sistemas eléctricos.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="./images/auditoriasenergeticas.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-cyan-custom mt-5 card-glass-pill text-center p-3">
              Auditorías Energéticas
            </h2>
            <p className="text-base leading-relaxed mt-2 text-gray-400">
              Evalúa la eficiencia de tu consumo eléctrico y obtén
              recomendaciones personalizadas para reducir costos y mejorar la
              sostenibilidad.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="./images/solucionesdeautomatizacion.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-cyan-custom mt-5 card-glass-pill text-center p-3">
              Soluciones de Automatización
            </h2>
            <p className="text-base leading-relaxed mt-2 text-gray-400">
              Integra sistemas de automatización avanzados para mejorar la
              eficiencia y controlar tus instalaciones eléctricas con la última
              tecnología.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
