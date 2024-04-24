"use client";
import ContactForm from "./FormContact";
import FormContact from "./FormContact";

export default function ContactUs() {
  return (
    <section id="ContactUs" className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(0) contrast(1.2) opacity(1);" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Ubicanos
              </h2>
              <p className="mt-1">
                Av. Libertador 1000, Buenos Aires, Argentina
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Correo electrónico:
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                ventas@voltconexiones.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Whatsapp
              </h2>
              <p className="leading-relaxed"><a href="" target="_blank">+54 111 111 111 1</a></p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
