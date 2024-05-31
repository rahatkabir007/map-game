import React, { useState } from 'react';

import Map from '../../components/sections/Map/Map';
import GameControls from '../../components/sections/Map/GameControls';
import Score from '../../components/sections/Map/Score';

const Homepage = () => {
    const [score, setScore] = useState(1500);
    const [handleCitySelected, setHandleCitySelected] = useState<(lat: number, lng: number) => void>(() => () => { });

    return (
        <div className="App">
            <Score score={score} />
            <GameControls setHandleCitySelected={setHandleCitySelected} onScoreUpdate={setScore} />
            <Map onCitySelected={handleCitySelected} />
        </div>
    );
};

export default Homepage;
