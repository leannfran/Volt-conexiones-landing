import Hero from "./components/Hero.jsx"
import Statistic from "./components/Statistic.jsx"
import OurServices from "./components/OurServices.jsx"
import WorkDone from "./components/WorkDone.jsx";
import Team from "./components/Team.jsx"
import SocialMedia from "./components/SocialMedia.jsx"
import ContactUs from "./components/ContactUs.jsx"

export default function Home() {
  return (
    <>
      <Hero />
      <Statistic />
      <OurServices />
      <WorkDone />
      <section class="text-gray-600 body-font p-4">
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
      <Team />
      <SocialMedia />
      <ContactUs />
    </>
  );
}
