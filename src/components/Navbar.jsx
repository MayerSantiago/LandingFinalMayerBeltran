import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 fixed w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Ingeniero Mayer Beltrán
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link smooth spy to="inicio">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full">
                  Inicio
                </button>
              </Link>
              <Link smooth spy to="perfil">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full">
                  Perfil
                </button>
              </Link>
              <Link smooth spy to="estudios">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full">
                  Estudios
                </button>
              </Link>
              <Link smooth spy to="experiencia">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full">
                  Experiencia
                </button>
              </Link>
              <Link smooth spy to="portafolio">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full">
                  Portafolio
                </button>
              </Link>
              <Link smooth spy to="contacto">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded-full">
                  Contacto
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
