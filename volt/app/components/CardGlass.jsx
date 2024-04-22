"use client";
import { TfiInstagram } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

export default function CardGlass() {
  return (
    <section className="text-gray-600 body-font p-4 mx-auto">
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

        {/* Basic structure of profile card */}
        <div class="wrapper">
          {/* Profile image area  */}
          <div class="img-area">
            <div class="inner-area">
              <img src="#" alt="Exequiel Abuin Fundador de Volt Conexiones" />
            </div>
          </div>
          {/* Basic information */}
          <div class="name">Exequiel Abuin</div>
          <div class="about">Fundador</div>
          <div className="text-center text-gray-400">
            Especializado en instalaciones industriales, Exequiel tiene más de
            15 años de experiencia asegurando la calidad y eficiencia en todos
            nuestros proyectos
          </div>
          {/* social icon */}
          <div class="social-icons">
            <a href="#" class="insta">
              <i class="fab fa-google">
                <TfiInstagram />
              </i>
            </a>
            <a href="#" class="yt">
              <i class="fab fa fa-whatsapp">
                <SiWhatsapp />
              </i>
            </a>
            <a href="#" class="yt">
              <i class="fab fa fa-whatsapp">
                <SlSocialTwitter />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
