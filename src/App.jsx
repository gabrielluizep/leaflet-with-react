import React, { useState } from 'react';

import { Heatmap, MarkerCluster } from './components';

const App = () => {
  const [page, setPage] = useState('mark');

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '10vh',
          display: 'flex',
          backgroundColor: '#acd3df',
        }}
      >
        <div style={{ width: '50%', height: '100%', paddingLeft: '20px' }}>
          <p variant="h6">leaflet-with-react</p>
        </div>

        <div
          style={{ width: '50%', height: '100%', paddingRight: '20px' }}
          container
          alignItems="center"
          justifyContent="flex-end"
        >
          <button
            style={{ marginRight: '20px' }}
            type="button"
            onClick={() => setPage('heatmap')}
          >
            Heatmap
          </button>

          <button type="button" onClick={() => setPage('markercluster')}>
            Markercluster
          </button>
        </div>
      </div>

      {page === 'heatmap' ? <Heatmap /> : <MarkerCluster />}
    </>
  );
};

export default App;
