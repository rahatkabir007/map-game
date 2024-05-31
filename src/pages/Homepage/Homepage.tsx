import React, { useState } from 'react';

import Map from '../../components/sections/Map/Map';
import GameControls from '../../components/sections/Map/GameControls';
import { Link } from 'react-router-dom';
const Homepage = () => {
    // const [score, setScore] = useState(1500);
    const [handleCitySelected, setHandleCitySelected] = useState<(lat: number, lng: number) => void>(() => () => { });

    return (
        <div className="h-[30vh] !my-auto">
            {/* <div className='flex justify-center'>
                <GameControls setHandleCitySelected={setHandleCitySelected}  />
           </div>
            <div className=''>
                <Map onCitySelected={handleCitySelected} />
           </div> */}
            <div className='container-x flex flex-col gap-8 justify-center'>
                <div className='flex justify-center items-center text-9xl '>
                    <span className='uppercase font-bold'>Map Game</span>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='inline-block outline-none cursor-pointer text-6xl leading-none rounded-full transition-colors duration-300 border border-gray-800 tracking-wider min-w-[450px] uppercase whitespace-normal font-semibold text-center py-4 px-3.5 text-gray-700 bg-transparent h-40 hover:text-white hover:bg-gray-400 hover:border-transparent'>
                        <Link to={"/map-game"}>Start</Link>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default Homepage;
