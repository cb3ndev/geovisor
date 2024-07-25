import React from 'react';

import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const GeovisorMap = () => {
  return (
    <div id="map" className="">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default GeovisorMap;
