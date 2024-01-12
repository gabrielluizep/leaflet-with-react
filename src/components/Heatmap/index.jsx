import React from 'react';

import L from 'leaflet';
import 'leaflet.heat';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import { locations } from '../../locations';

const HeatmapLayer = () => {
  const map = useMap();

  L.heatLayer(locations, { blur: 15 }).addTo(map);

  return null;
};

function Heatmap() {
  return (
    <MapContainer
      style={{
        width: '100vw',
        height: '90vh',
      }}
      center={[-37.8871864333, 175.4691891]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <HeatmapLayer />
    </MapContainer>
  );
}

export default Heatmap;
