import React, { useState } from 'react';
import Map from '../../components/sections/Map/Map';
import GameControls from '../../components/sections/Map/GameControls';
import { LatLngExpression } from 'leaflet';
const MapGamePage = () => {

    const [handleCitySelected, setHandleCitySelected] = useState<(lat: number, lng: number) => void>(() => () => { });
    const [markerPosition, setMarkerPosition] = useState<LatLngExpression | null>(null);

    return (
        <div className="container-x flex flex-col gap-8 justify-center">
           
            <div className='flex justify-center'>
                <GameControls setHandleCitySelected={setHandleCitySelected} setMarkerPosition={setMarkerPosition} />
           </div>
            <div className=''>
                <Map onCitySelected={handleCitySelected} markerPosition={markerPosition} setMarkerPosition={setMarkerPosition} />
           </div>        
        </div>
    );
};

export default MapGamePage;
