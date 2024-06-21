import "../css/App.css";
import myMap from "../img/map_min.webp";
import { ImageOverlay, MapContainer, useMap } from "react-leaflet";
import React, { useEffect, useState } from "react";
import BridgeMarkerList, { richBridgesGen } from "../commons/BridgeMarker";
import WelcomeScreen from "../components/WelcomeScreen";
import FinishScreen from "../components/FinishScreen";
import { bridges } from "./bridges";
import config from "./config";
import ZoomShowHide from "./ZoomShowHide";
import addSmallLabels from "./smallLabels";
import bigLabelsLayerGroup from "./bigLabels";
import sightsLayerGroup from "./sights";
import { countFinishedBridges } from "./BridgesUtils";
import { RootContext } from "./RootContext";

function MapSettings() {
  const map = useMap();

  const maxScreenDimension =
    window.innerHeight > window.innerWidth
      ? window.innerHeight
      : window.innerWidth;
  const zoom =
    maxScreenDimension < 1000
      ? 13.5
      : map.getBoundsZoom(config.mapContainer.bounds, true);

  useEffect(() => {
    map.setZoom(zoom);
    map.setMinZoom(zoom);
    map.setMaxZoom(zoom + 1);
    const zsh = new ZoomShowHide();
    zsh.addTo(map);

    addSmallLabels(zsh, config.smallLabelZoomThreshold, null);
    bigLabelsLayerGroup.addTo(map);
    sightsLayerGroup.addTo(map);

    return () => {
      zsh.clearLayers();
    };
  });

  return null;
}

function App() {
  const [showFinishScreen, setShowFinishScreen] = useState(false);

  const richBridges = richBridgesGen();
  // console.log(42);

  const checkFinish = () => {
    if (countFinishedBridges() === bridges.length && !isAlreadyFinished()) {
      // bridges.forEach((b) => {
      //   unsetBridgeFinished(b);
      // });
      markAsFinished();
      setShowFinishScreen(true);
    }
  };
  return (
    <MapContainer
      className="map"
      style={{ minHeight: "100%", height: "100%", width: "100%" }}
      {...config.mapContainer}
    >
      <MapSettings />
      <ImageOverlay bounds={config.mapContainer.bounds} url={myMap} />
      <WelcomeScreen />
      {showFinishScreen && <FinishScreen />}
      {/* <NearestMarker /> */}
      <RootContext.Provider
        value={{ checkFinish: checkFinish, richBridges: richBridges }}
      >
        <BridgeMarkerList richBridges={richBridges} />
      </RootContext.Provider>
    </MapContainer>
  );
}

function markAsFinished() {
  localStorage.setItem("finished", true);
}

function isAlreadyFinished() {
  return localStorage.getItem("finished");
}

export default App;
