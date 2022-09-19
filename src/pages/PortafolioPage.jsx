import React from "react";

export const PortafolioPage = () => {
  return (
    <div class="bg-gradient-to-r from-sky-300 to-sky-900 w-full h-full mt-24">
      <div Class="ml-16 p-10 w-full">
        <button class="bg-gray-500 text-white font-bold py-4 px-20 text-2xl rounded-full">
          Portafolio
        </button>
      </div>
      <div Class="flex flex-row ">
      <div Class="ml-12 w-full basis-2/4 mr-12">
          <div class="rounded-lg overflow-hidden shadow-lg bg-violet-700 w-full h-full">
            <div class="px-6 py-4 ">
              <p class="text-white text-3xl text-center">
                TODO List
                <br />
              
                2022
              </p>
            </div>
            <div Class="ml-28">
            <a href="https://inquisitive-bavarois-3ba602.netlify.app/">
              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-28 my-4">
                Link
              </button>
    </a>
    <a href="https://github.com/MayerSantiago/ToDoReact">
              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-12 my-4">
                GitHub
              </button>
              </a>
            </div>
          </div>
        </div>

        <div Class="ml-12 w-full basis-2/4 mr-12">
          <div class="rounded-lg overflow-hidden shadow-lg bg-violet-700 w-full h-full">
            <div class="px-6 py-4 ">
              <p class="text-white text-3xl text-center">
                Heroes
                <br />
              
                2022
              </p>
            </div>
            <div Class="ml-28">
              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-28 my-4 m">
                Link
              </button>

              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-12 my-4">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <div Class="flex flex-row ">
      <div Class="ml-12 w-full basis-2/4 mr-12 mt-4">
          <div class="rounded-lg overflow-hidden shadow-lg bg-violet-700 w-full h-full">
            <div class="px-6 py-4 ">
              <p class="text-white text-3xl text-center">
                Clima
                <br />
                
                2022
              </p>
            </div>
            <div Class="ml-28">
              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-28 my-4">
                Link
              </button>

              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-12 my-4">
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div Class="ml-12 w-full basis-2/4 mr-12 mt-4">
          <div class="rounded-lg overflow-hidden shadow-lg bg-violet-700 w-full h-full">
            <div class="px-6 py-4 ">
              <p class="text-white text-3xl text-center">
                Landing Page
                <br />
               
                2022
              </p>
            </div>
            <div Class="ml-28">

            <a href="https://www.figma.com/proto/brJkkiztMGRHVuhxs6zQ64/Untitled?node-id=2%3A2&starting-point-node-id=2%3A2&scaling=min-zoom">
              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-28 my-4 ">
                Link
              </button>
              </a>

              <button class="bg-gray-500 text-white font-bold py-2 px-8 text-2xl rounded-full ml-12 my-4">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
