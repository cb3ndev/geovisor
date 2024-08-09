import React, { useEffect, useRef } from 'react';

import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

const API_KEY = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

const ArcGISMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Configurar el API Key
      if (API_KEY) {
        esriConfig.apiKey = API_KEY;
      } else {
        console.error('API Key is missing!');
      }
      const webMap = new WebMap({
        basemap: 'topo', // Cambia esto según el tipo de mapa base que prefieras
      });

      const view = new MapView({
        container: mapRef.current,
        map: webMap,
        center: [-76.979, -9.19], // Longitud, Latitud
        zoom: 6,
      });

      view.ui.move(['zoom'], 'bottom-right');

      return () => {
        view.destroy(); // Limpiar la instancia del mapa al desmontar el componente
      };
    }
  }, []);

  return <div style={{ height: '100vh', width: '100%' }} ref={mapRef}></div>;
};

export default ArcGISMap;
