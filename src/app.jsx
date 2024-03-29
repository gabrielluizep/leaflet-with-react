import React, { useState } from 'react';

import Heatmap from './components/heatmap';
import MarkerCluster from './components/markercluster';

const App = () => {
  const [page, setPage] = useState('mark');

  return (
    <div className="h-screen relative">
      <div className="flex px-8 py-4 mt-4 absolute top-0 left-1/2 -translate-x-1/2 w-3/4 z-[1000] bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
        <a
          href="https://github.com/gabrielluizep/leaflet-with-react"
          className="flex flex-col"
        >
          <h1 className="font-bold text-lg text-blue-400">
            leaflet-with-react
          </h1>
          <p className="ml-auto text-xs -mt-1">view on github</p>
        </a>

        <a
          href="https://www.gabrielluizep.dev"
          className="flex items-center gap-2 ml-4"
        >
          <p className="text-sm text-gray-500">by</p>
          <img
            src="https://github.com/gabrielluizep.png"
            alt="Author: Gabriel Luiz Espindola Pedro"
            className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 transition-all duration-300"
          />
        </a>

        <button
          className="mr-5 ml-auto bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-500 hidden md:inline-block"
          type="button"
          onClick={() => setPage('heatmap')}
        >
          Heatmap
        </button>

        <button
          className="bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-500 hidden md:inline-block"
          type="button"
          onClick={() => setPage('markercluster')}
        >
          Markercluster
        </button>
      </div>

      {page === 'heatmap' ? <Heatmap /> : <MarkerCluster />}

      <div className="flex flex-col gap-y-2 px-8 py-4 mb-4 absolute md:hidden bottom-0 left-1/2 -translate-x-1/2 w-3/4 z-[1000] bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
        <button
          className="mr-5 bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-500 w-full"
          type="button"
          onClick={() => setPage('heatmap')}
        >
          Heatmap
        </button>

        <button
          className="bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-500 w-full"
          type="button"
          onClick={() => setPage('markercluster')}
        >
          Markercluster
        </button>
      </div>
    </div>
  );
};

export default App;
