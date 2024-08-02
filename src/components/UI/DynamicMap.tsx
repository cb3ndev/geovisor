// components/DynamicMap.tsx
import React, { useEffect, useRef } from 'react';

import esriConfig from '@arcgis/core/config';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import { defineCustomElements as defineMapElements } from '@arcgis/map-components/dist/loader';

const DynamicMap = () => {
    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            esriConfig.apiKey = "13a89a02e8fd4a5d8fd1e6a29c440489"; // Reemplaza con tu API key

            // Registrar los componentes de ArcGIS
            defineMapElements(window, {
                resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets"
            });

            if (mapDiv.current) {
                const webmap = new WebMap({
                    portalItem: {
                        id: "WRefFZA3FBE3nt1v" // Reemplaza con tu ID de elemento de ArcGIS
                    }
                });

                const view = new MapView({
                    container: mapDiv.current!,
                    map: webmap
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
