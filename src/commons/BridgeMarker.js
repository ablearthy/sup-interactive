import L from "leaflet";
import React, { Fragment, useState, useContext } from "react";
import { Marker } from "react-leaflet";
import { bridges } from "../js/bridges";
import CardModal from "../lib/card/CardModal";
import markerYellowIcon from "../img/yellow-marker.png";
import markerRedIcon from "../img/red-marker.png";
import markerGreyIcon from "../img/grey-marker.png";
import { RootContext } from "js/RootContext";
import { isBridgeFinished } from "js/BridgesUtils";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [33, 47],
    iconAnchor: [33 / 2, 47],
  },
});

const blueIcon = new LeafIcon({
  iconUrl: markerRedIcon,
});

const greenIcon = new LeafIcon({
  iconUrl: markerYellowIcon,
});

const greyIcon = new LeafIcon({
  iconUrl: markerGreyIcon,
});

function getIcon(idx, bridge) {
  if (isBridgeFinished(bridge)) {
    return greenIcon;
  }

  if (bridges.findIndex((b) => !isBridgeFinished(b)) === idx) {
    return greyIcon;
  }

  return blueIcon;
}

function BridgeMarker({ idx, bridge, children, modalState }) {
  const ctx = useContext(RootContext);

  const [showModal, setShowModal] = modalState;

  const onQuestionSolved = () => {
    setTimeout(ctx.checkFinish, 500);
  };

  return (
    <Fragment>
      <Marker
        className="marker"
        position={bridge.position}
        eventHandlers={{ click: () => setShowModal(true) }}
        icon={getIcon(idx, bridge)}
      ></Marker>
      <CardModal
        idx={idx}
        showModal={showModal}
        setShowModal={setShowModal}
        onQuestionSolved={onQuestionSolved}
      >
        {children}
      </CardModal>
    </Fragment>
  );
}

export const richBridgesGen = () =>
  bridges.map((bridge, idx) => {
    const modalState = useState(false);

    return {
      bridge: bridge,
      modalState: modalState,
      component: (
        <BridgeMarker idx={idx} bridge={bridge} modalState={modalState}>
          {bridge.overlayComponent}
        </BridgeMarker>
      ),
    };
  });

function BridgeMarkerList({ richBridges }) {
  return (
    <ul>
      {richBridges.map((bridge, idx) => (
        <li key={idx}>{bridge.component}</li>
      ))}
    </ul>
  );
}

export default BridgeMarkerList;
