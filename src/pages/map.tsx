// pages/map.tsx
import React from 'react';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/UI/DynamicMap'), { ssr: false });

const MapPage = () => {
    return <DynamicMap />;
};

export default MapPage;
