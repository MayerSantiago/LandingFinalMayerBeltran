import React from "react";
import { Link } from "react-scroll";

export const EstudiosDosPage = () => {
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
                Diplomado
                <br />
                Universidad Nacional de Colombia
                <br />
                Machine Learning and Data Science
                <br />
                2022-1
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
                Diplomado
                <br />
                Fundación Internacional Maria Luisa de Moreno
                <br />
                Desarrollo Front-end con React JS
                <br />
                2022-2
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
