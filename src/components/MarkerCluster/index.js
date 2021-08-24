import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import { locations } from "../../locations";

const useStyles = makeStyles((theme) => ({
  clusterDivStyle: {
    width: "40px",
    height: "40px",

    background: "#ba1122",
    border: "3px solid #ededed",

    borderRadius: "50%",

    color: "#ededed",
    lineHeight: "37px",
    textAlign: "center",
  },
}));

function MarkerCluster() {
  const classes = useStyles();
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
            className: classes.clusterDivStyle,
            iconSize: L.point(40, 40, true),
          })
        }
      >
        {locations.map((point) => {
          return (
            <Marker position={[point[0], point[1]]}>
              <Popup>
                <Typography>Latitude: {point[0]}</Typography>
                <Typography>Longitude: {point[1]}</Typography>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default MarkerCluster;
