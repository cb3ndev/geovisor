// components/DynamicMap.tsx
import React, { useEffect, useRef } from 'react';

import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { defineCustomElements as defineMapElements } from '@arcgis/map-components/dist/loader';

const DynamicMap = () => {
    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            esriConfig.apiKey = process.env.ARCGIS_API_KEY || "";
            // Registrar los componentes de ArcGIS
            defineMapElements(window, {
                resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets"
            });

            if (mapDiv.current) {
                const map = new Map({
                    basemap: "satellite" // Aquí seleccionas el mapa base, se probo antes "topo-vector"
                });

                const view = new MapView({
                    container: mapDiv.current!,
                    map: map,
                    center: [-100, 40], // Longitud y latitud del centro del mapa
                    zoom: 4 // Nivel de zoom
                });

                return () => {
                    if (view) {
                        view.container = null as any; // O también puedes usar `as any` para evitar el error
                    }
                };
            }
        }
    }, []);

    return <div style={{ width: '100vw', height: '100vh' }} ref={mapDiv}></div>;
};

export default DynamicMap;
