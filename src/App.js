import React, { useState } from "react";

import { Button, Grid, Typography, Paper } from "@material-ui/core";

import { Heatmap, MarkerCluster } from "./components";

const App = () => {
  const [page, setPage] = useState("heatmap");
  return (
    <>
      <Paper
        style={{
          width: "100vw",
          height: "10vh",
          display: "flex",
          backgroundColor: "#acd3df",
        }}
        elevation={10}
      >
        <Grid
          style={{ width: "50%", height: "100%", paddingLeft: "20px" }}
          container
          alignItems="center"
        >
          <Typography variant="h6">leaflet-with-react</Typography>
        </Grid>
        <Grid
          style={{ width: "50%", height: "100%", paddingRight: "20px" }}
          container
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            style={{ marginRight: "20px" }}
            variant="contained"
            color="primary"
            onClick={() => setPage("heatmap")}
          >
            Heatmap
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage("markercluster")}
          >
            Markercluster
          </Button>
        </Grid>
      </Paper>
      {page === "heatmap" ? <Heatmap /> : <MarkerCluster />}
    </>
  );
};

export default App;
