"use client";
import Link from "next/link";
import { useState } from "react";
import { GrContact } from "react-icons/gr";
// Icons

import { TfiInstagram } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";


import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";
import { AiFillInstagram } from 'react-icons/ai';
import { RiTiktokFill } from 'react-icons/ri';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto text-white">
          <a className="mr-5 font-bold hover:border-b-2 border-cyan-500 cursor-pointer">Inicio</a>
          <a className="mr-5 font-bold hover:border-b-2 border-cyan-500 cursor-pointer">Servicios</a>
          <a className="mr-5 font-bold hover:border-b-2 border-cyan-500 cursor-pointer">Portafolio</a>
          <a className="font-bold hover:border-b-2 border-cyan-500 cursor-pointer">Contactanos</a>
        </nav>
        <a href="./" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img src="./logo.png" className="w-64 lg:w-50 xl:w-50" alt="Logo VoltConexiones" />
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 pt-5 lg:pt-0 xl:pt-0">
          <button class="me-3 btn-glass text-white border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg flex"><a href="" target="_blank" className="text-white hover:text-cyan-500"><TfiInstagram/></a></button>
          <button class="ms-3 btn-glass text-white border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg flex"><a href="" target="_blank" className="text-white hover:text-cyan-500"><SiWhatsapp /></a></button>
        </div>
      </div>
    </header>
  );
}
