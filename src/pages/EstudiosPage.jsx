import React from "react";
import { Link } from "react-scroll";

export const EstudiosPage = () => {
  return (
    <div class="bg-gradient-to-r from-sky-300 to-sky-900 w-full h-full mt-24">
      <div Class="ml-16 p-10 w-full">
        <button class="bg-gray-500 text-white font-bold py-4 px-20 text-2xl rounded-full">
          Estudios
        </button>
      </div>
      <div class="columns-2 p-9">
        <div Class="ml-32 ">
          
          <div class="w-52 h-52 rounded-full mr-4 overflow-hidden shadow-lg bg-gradient-to-r from-violet-700 to-sky-900 ">
          <Link smooth spy to="estudiosUno">
            <div class="px-6 py-4">
              <p class="text-white text-2xl ml-4 mt-6">
                Ingenieria Industrial 2014-2021
              </p>
            </div>
            </Link>
            
          </div>
        </div>

        <div Class="ml-12 mt-12">
          <div class="w-52 h-52 rounded-full mr-4 overflow-hidden shadow-lg bg-gradient-to-r from-violet-700 to-sky-900 ">
          <Link smooth spy to="estudiosDos">
            <div class="px-6 py-4">
              <p class="text-white text-2xl ml-4 mt-6">
                Machine Learning and Data Science 2022-1
              </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div class="divide-y-8 divide-purple-900 ml-40 mr-40">
        <div></div>
        <div></div>
      </div>
      <div class="columns-2 p-9">
        <div Class="ml-96">
          <div class="w-52 h-52 rounded-full mr-4 overflow-hidden shadow-lg bg-gradient-to-r from-violet-700 to-sky-900 ">
          <Link smooth spy to="estudiosUno">
            <div class="px-6 py-4">
              <p class="text-white text-2xl ml-4 mt-6">
                Excel aplicado a los negocios 2020-2
              </p>
            </div>
            </Link>
          </div>
        </div>

        <div Class="ml-96">
          <div class="w-52 h-52 rounded-full mr-4 overflow-hidden shadow-lg bg-gradient-to-r from-violet-700 to-sky-900 ">
          <Link smooth spy to="estudiosDos">
            <div class="px-6 py-4">
              <p class="text-white text-2xl ml-4 mt-6">
                Desarrollo Front-end con React JS 2022-2
              </p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
