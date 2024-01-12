import React from "react";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { locations } from "../../locations";


function MarkerCluster() {
  return (
    <MapContainer
      style={{
        width: "100vw",
        height: "90vh",
      }}
      center={[-37.8871864333, 175.4691891]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        iconCreateFunction={(cluster) =>
          L.divIcon({
            html: `<span>${cluster.getChildCount()}</span>`,
            className: "clusterDivStyle",
            iconSize: L.point(40, 40, true),
          })
        }
      >
        {locations.map((point, index) => {
          return (
            <Marker key={index} position={[point[0], point[1]]}>
              <Popup>
                <p>Latitude: {point[0]}</p>
                <p>Longitude: {point[1]}</p>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default MarkerCluster;
