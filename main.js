// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = "/";

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

if (module.hot) {
  module.hot.accept();
}

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNjBlYzVhMi1iYTM2LTQzMzktYmJiMC0zNDQ4YzdlYWQ5ZGMiLCJpZCI6MTA1OTM2LCJpYXQiOjE2NjE0NDEyMDd9.58WVmxXXl4t5GatYdvRYuy4tRX4Z0IPzVY3tRyfY49A";

// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
});
// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = viewer.scene.primitives.add(
  Cesium.createOsmBuildings()
);
// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation: {
    heading: Cesium.Math.toRadians(0.0),
    pitch: Cesium.Math.toRadians(-15.0),
  },
});
