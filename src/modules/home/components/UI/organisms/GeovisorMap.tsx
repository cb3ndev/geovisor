import React from 'react';

import dynamic from 'next/dynamic';

// Cargamos el componente del mapa de manera dinámica para evitar problemas de SSR
const ArcGISMap = dynamic(() => import('../organisms/ArcGISMap'), {
  ssr: false,
});

const GeovisorMap = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ArcGISMap />
    </div>
  );
};

export default GeovisorMap;
