import React from "react";
import { Link } from "react-scroll";

export const EstudiosUnoPage = () => {
  return (
    <div class="bg-gradient-to-r from-sky-300 to-sky-900 w-full h-full mt-24">
      
      
      <div Class="flex flex-row mt-12">
        <div Class="ml-32 w-1/3 basis-1/4">
          <div class="w-80 h-80 rounded-full mr-4 overflow-hidden shadow-lg bg-gradient-to-r from-violet-700 to-sky-900 "></div>
        </div>

        <div Class="ml-12 w-full basis-2/4 mr-12 mt-12">
          <div class="rounded-lg overflow-hidden shadow-lg bg-violet-700 w-full h-2/3">
            <div class="px-6 py-4 ">
              <p class="text-white text-3xl text-center">
                Educación Superior
                <br />
                Universidad Distrital Francisco José de Caldas
                <br />
                Ingenieria Industrial
                <br />
                2014-2 /2021-1
              </p>
            </div>
          </div>
        </div>
      </div>

      <div Class="flex flex-row mt-4 ml-12">
        <div Class="ml-12 w-full basis-2/4 mr-12 mt-12">
          <div class="rounded-lg overflow-hidden shadow-lg bg-violet-700 w-full h-2/3">
            <div class="px-6 py-4 ">
              <p class="text-white text-3xl text-center">
                Formación Complementaria
                <br />
                Universidad Austral
                <br />
                Excel aplicado a los negocios
                <br />
                2020-1
              </p>
            </div>
          </div>
        </div>
        <div Class="ml-32 w-1/3 basis-1/4">
          <div class="w-80 h-80 rounded-full mr-12 overflow-hidden shadow-lg bg-gradient-to-r from-violet-700 to-sky-900 "></div>
        </div>
      </div>
    </div>
  );
};
