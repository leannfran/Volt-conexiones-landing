import Hero from "./components/Hero.jsx"
import Statistic from "./components/Statistic.jsx"
import OurServices from "./components/OurServices.jsx"
import WorlDone from "./components/WorkDone.jsx"
import WorkDone from "./components/WorkDone.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistic />
      <OurServices />
      <WorkDone />

      <section class="text-gray-600 body-font">
        <div class="container px-5 pb-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                <div class="pt-4 pl-2">
                  <h2 class="text-lg font-medium text-gray-900">Renovación de Instalaciones</h2>
                  <p class="leading-relaxed">Completa renovación eléctrica en fábrica.</p>
                  <span class="text-gray-500 text-sm">4.8/5 estrellas (34 reseñas)</span>
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                <div class="pt-4 pl-2">
                  <h2 class="text-lg font-medium text-gray-900">Sistema de Automatización</h2>
                  <p class="leading-relaxed">Automatización avanzada en complejo comercial.</p>
                  <span class="text-gray-500 text-sm">5.0/5 estrellas (22 reseñas)</span>
                </div>
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                <div class="pt-4 pl-2">
                  <h2 class="text-lg font-medium text-gray-900">Actualización de Sistemas</h2>
                  <p class="leading-relaxed">Actualización de sistemas eléctricos en hotel.</p>
                  <span class="text-gray-500 text-sm">4.5/5 estrellas (19 reseñas)</span>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                <div class="pt-4 pl-2">
                  <h2 class="text-lg font-medium text-gray-900">Instalación de Iluminación LED</h2>
                  <p class="leading-relaxed">Proyecto de iluminación LED en centro educativo.</p>
                  <span class="text-gray-500 text-sm">4.9/5 estrellas (28 reseñas)</span>
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                <div class="pt-4 pl-2">
                  <h2 class="text-lg font-medium text-gray-900">Eficiencia Energética</h2>
                  <p class="leading-relaxed">Mejora de eficiencia energética en industria.</p>
                  <span class="text-gray-500 text-sm">4.7/5 estrellas (30 reseñas)</span>
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
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
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
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
              <img src="https://dummyimage.com/50x50" alt="Facebook" class="w-12 h-12 rounded-full" />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" class="m-2">
              <img src="https://dummyimage.com/50x50" alt="Twitter" class="w-12 h-12 rounded-full" />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" class="m-2">
              <img src="https://dummyimage.com/50x50" alt="Instagram" class="w-12 h-12 rounded-full" />
            </a>
            <a href="https://linkedin.com/company/yourpage" target="_blank" class="m-2">
              <img src="https://dummyimage.com/50x50" alt="LinkedIn" class="w-12 h-12 rounded-full" />
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
