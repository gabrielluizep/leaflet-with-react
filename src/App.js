import React, { useState } from "react";

import { Heatmap, MarkerCluster } from "./components";

const App = () => {
  const [page, setPage] = useState("mark");
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "10vh",
          display: "flex",
          backgroundColor: "#acd3df",
        }}
        elevation={10}
      >
        <div
          style={{ width: "50%", height: "100%", paddingLeft: "20px" }}
          container
          alignItems="center"
        >
          <p variant="h6">leaflet-with-react</p>
        </div>
        <div
          style={{ width: "50%", height: "100%", paddingRight: "20px" }}
          container
          alignItems="center"
          justifyContent="flex-end"
        >
          <button
            style={{ marginRight: "20px" }}
            variant="contained"
            color="primary"
            onClick={() => setPage("heatmap")}
          >
            Heatmap
          </button>
          <button
            variant="contained"
            color="primary"
            onClick={() => setPage("markercluster")}
          >
            Markercluster
          </button>
        </div>
      </div>
      {page === "heatmap" ? <Heatmap /> : <MarkerCluster />}
    </>
  );
};

export default App;
