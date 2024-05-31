import React, { useState } from 'react';
import Map from '../../components/sections/Map/Map';
import GameControls from '../../components/sections/Map/GameControls';
import { Link } from 'react-router-dom';
const MapGamePage = () => {
    // const [score, setScore] = useState(1500);
    const [handleCitySelected, setHandleCitySelected] = useState<(lat: number, lng: number) => void>(() => () => { });

    return (
        <div className="container-x flex flex-col gap-8 justify-center">
            <div className='flex justify-start'>
                <Link to={"/"} className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.027 7.232a1 1 0 0 1 1.408.128l2.083 2.5a1 1 0 0 1-1.536 1.28l-2.083-2.5a1 1 0 0 1 .128-1.408" /><path d="M15.027 13.768a1 1 0 0 1-.129-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.408.128" /><path d="M17.5 10.5a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1M3 3.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 14a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" /><path d="M13 2.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-9-10a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0v-14a1 1 0 0 1 1-1" /></g></svg>
                    <span>Leave</span></Link>
           </div>
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
