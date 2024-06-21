const bounds = [
  [59.902412999999996, 30.17354],
  [59.964387, 30.45446],
];

const config = {
  mapContainer: {
    center: [50.933, 30.314],
    bounds: bounds,
    zoomSnap: 0,
    scrollWheelZoom: true,
    zoomDelta: 0.25,
    wheelDebounceTime: 100,
    attributionControl: false,
    maxBoundsViscosity: 1.0,
    bounceAtZoomLimits: false,
    maxBounds: bounds,
  },
  smallLabelZoomThreshold: 14,
};

export default config;
