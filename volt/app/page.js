
export default function Home() {
  return (
    <>
   
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="hover:text-gray-900">Fourth Link</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Volt Conexiones</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Soluciones Eléctricas Personalizadas
        <br className="hidden lg:inline-block"/>antes de que necesites encender la luz
      </h1>
      <p className="mb-8 leading-relaxed">
        Entendemos que cada espacio es único. Por eso, adaptamos nuestras soluciones a las necesidades específicas de tu negocio, asegurando un servicio eficiente y de máxima calidad.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Descubre Más</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Contáctanos</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac"/>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10+ Años</h2>
          <p className="leading-relaxed">Experiencia</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">500+</h2>
          <p className="leading-relaxed">Proyectos Completados</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">300+</h2>
          <p className="leading-relaxed">Clientes Satisfechos</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">100%</h2>
          <p className="leading-relaxed">Clientes que recomiendan</p>
        </div>
      </div>
    </div>
  </section>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Nuestros Servicios</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Explora la variedad de servicios eléctricos que ofrecemos, diseñados para garantizar la eficiencia y seguridad de tus instalaciones.</p>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Instalación y Mantenimiento</h2>
        <p className="text-base leading-relaxed mt-2">Servicios completos de instalación y mantenimiento para asegurar el máximo rendimiento y seguridad de tus sistemas eléctricos.</p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Auditorías Energéticas</h2>
        <p className="text-base leading-relaxed mt-2">Evalúa la eficiencia de tu consumo eléctrico y obtén recomendaciones personalizadas para reducir costos y mejorar la sostenibilidad.</p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Soluciones de Automatización</h2>
        <p className="text-base leading-relaxed mt-2">Integra sistemas de automatización avanzados para mejorar la eficiencia y controlar tus instalaciones eléctricas con la última tecnología.</p>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 pt-24 pb-5 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Trabajos Realizados</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Un vistazo a algunos de nuestros proyectos más destacados y lo que nuestros clientes tienen que decir sobre ellos.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
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
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
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
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
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


<section class="text-gray-600 body-font">
  <div class="container px-5 pb-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
          <div class="pt-4 pl-2">
            <h2 class="text-lg font-medium text-gray-900">Renovación de Instalaciones</h2>
            <p class="leading-relaxed">Completa renovación eléctrica en fábrica.</p>
            <span class="text-gray-500 text-sm">4.8/5 estrellas (34 reseñas)</span>
          </div>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
          <div class="pt-4 pl-2">
            <h2 class="text-lg font-medium text-gray-900">Sistema de Automatización</h2>
            <p class="leading-relaxed">Automatización avanzada en complejo comercial.</p>
            <span class="text-gray-500 text-sm">5.0/5 estrellas (22 reseñas)</span>
          </div>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
          <div class="pt-4 pl-2">
            <h2 class="text-lg font-medium text-gray-900">Actualización de Sistemas</h2>
            <p class="leading-relaxed">Actualización de sistemas eléctricos en hotel.</p>
            <span class="text-gray-500 text-sm">4.5/5 estrellas (19 reseñas)</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
          <div class="pt-4 pl-2">
            <h2 class="text-lg font-medium text-gray-900">Instalación de Iluminación LED</h2>
            <p class="leading-relaxed">Proyecto de iluminación LED en centro educativo.</p>
            <span class="text-gray-500 text-sm">4.9/5 estrellas (28 reseñas)</span>
          </div>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
          <div class="pt-4 pl-2">
            <h2 class="text-lg font-medium text-gray-900">Eficiencia Energética</h2>
            <p class="leading-relaxed">Mejora de eficiencia energética en industria.</p>
            <span class="text-gray-500 text-sm">4.7/5 estrellas (30 reseñas)</span>
          </div>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
<div class="pt-4 pl-2">
<h2 class="text-lg font-medium text-gray-900">Modernización de Infraestructura</h2>
<p class="leading-relaxed">Modernización completa de infraestructura eléctrica en un centro comercial.</p>
<span class="text-gray-500 text-sm">4.6/5 estrellas (25 reseñas)</span>
</div>
</div>
</div>
</div>

  </div>
</section>




      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4);" }}></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Conoce a Nuestro Equipo</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Nuestro equipo está compuesto por profesionales altamente cualificados y dedicados a proporcionar soluciones eléctricas eficientes y seguras.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">Exequiel Abuin</h2>
            <h3 className="text-gray-500 mb-3">Fundador</h3>
            <p className="mb-4">Especializado en instalaciones industriales, Exequiel tiene más de 15 años de experiencia asegurando la calidad y eficiencia en todos nuestros proyectos.</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v5H6a2 2 0 00-2 2v3a5 5 0 002 4h3v-7h3v7h3a5 5 0 002-4v-3a2 2 0 00-2-2h-4V7a2 2 0 012-2h3v3h2V2z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
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

<section className="bg-gray-100">
  <div className="container mx-auto px-5 py-24">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Síguenos en Redes Sociales</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">Mantente actualizado con las últimas noticias y proyectos de Volt Conexiones siguiéndonos en nuestras redes sociales.</p>
    </div>
    <div className="flex justify-center">
      <a href="https://facebook.com/yourpage" target="_blank" class="m-2">
        <img src="https://dummyimage.com/50x50" alt="Facebook" class="w-12 h-12 rounded-full"/>
      </a>
      <a href="https://twitter.com/yourpage" target="_blank" class="m-2">
        <img src="https://dummyimage.com/50x50" alt="Twitter" class="w-12 h-12 rounded-full"/>
      </a>
      <a href="https://instagram.com/yourpage" target="_blank" class="m-2">
        <img src="https://dummyimage.com/50x50" alt="Instagram" class="w-12 h-12 rounded-full"/>
      </a>
      <a href="https://linkedin.com/company/yourpage" target="_blank" class="m-2">
        <img src="https://dummyimage.com/50x50" alt="LinkedIn" class="w-12 h-12 rounded-full"/>
      </a>
    </div>
  </div>
</section>



      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">First Link</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Second Link</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Third Link</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS</h2>
              <nav className="list-none mb-10">
                <li><a className="text-gray-600 hover:text-gray-800">First Link</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Second Link</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Third Link</a></li>
                <li><a className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
              </nav>
            </div>
            // Más enlaces y componentes...
          </div>
        </div>
      </footer>
 

    </>
  );
}
