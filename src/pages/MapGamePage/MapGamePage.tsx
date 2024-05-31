import React, { useState } from 'react';
import Map from '../../components/sections/Map/Map';
import GameControls from '../../components/sections/Map/GameControls';
const MapGamePage = () => {

    const [handleCitySelected, setHandleCitySelected] = useState<(lat: number, lng: number) => void>(() => () => { });

    return (
        <div className="container-x flex flex-col gap-8 justify-center">
           
            <div className='flex justify-center'>
                <GameControls setHandleCitySelected={setHandleCitySelected}  />
           </div>
            <div className=''>
                <Map onCitySelected={handleCitySelected} />
           </div>        
        </div>
    );
};

export default MapGamePage;
