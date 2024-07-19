import React from 'react';

import AngleRightIcon from './AngleRightIcon';
import CaretDownIcon from './CaretDownIcon';
import CaretRightIcon from './CaretRightIcon';
import LayerGroupIcon from './LayerGroupIcon';
import MagnifyingGlassIcon from './MagnifyingGlassIcon';
import XmarkIcon from './XmarkIcon';

const Icons = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <section className="border">
        <h2 className="font-poppins text-2xl font-bold p-2 mb-2 border-b">
          General Icons
        </h2>
        <div className="flex gap-2 p-2">
          <MagnifyingGlassIcon className="w-10 h-10" />
          <AngleRightIcon className="w-10 h-10" />
          <XmarkIcon className="w-10 h-10" />
          <CaretRightIcon className="w-10 h-10" />
          <CaretDownIcon className="w-10 h-10" />
          <LayerGroupIcon className="w-10 h-10 fill-green-500" />
        </div>
      </section>
      <section className="border">
        <h2 className="font-poppins text-2xl font-bold p-2 mb-2 border-b">
          Tipografia
        </h2>
        <div className="p-2">
          <h1 className="font-poppins text-6xl font-bold">Header 1</h1>
          <h2 className="font-poppins text-5xl font-bold">Header 2</h2>
          <h3 className="font-poppins text-4xl font-bold">Header 3</h3>
          <h4 className="font-poppins text-3xl font-bold">Subtitle 1</h4>
          <h5 className="font-poppins text-2xl font-bold">Subtitle 2</h5>
          <h6 className="font-poppins text-xl font-bold">Subtitle 3</h6>
          <p className="font-poppins text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut
            quis ea, neque necessitatibus magni deserunt repellat vitae
          </p>
          <p className="font-poppins text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut
            quis ea, neque necessitatibus magni deserunt repellat vitae
          </p>
          <p className="font-poppins text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut
            quis ea, neque necessitatibus magni deserunt repellat vitae
          </p>
          <p className="font-poppins text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aut
            quis ea, neque necessitatibus magni deserunt repellat vitae
          </p>
        </div>
      </section>
    </div>
  );
};

export default Icons;
