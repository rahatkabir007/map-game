import React, { useState, useEffect } from 'react';
import cities from '../../../datas/cities.json';
import { calculateDistance } from '../../../utils/distance';

interface GameControlsProps {
    setHandleCitySelected: (handler: (lat: number, lng: number) => void) => void;
    onScoreUpdate: (score: number) => void;
}

const GameControls = ({ setHandleCitySelected, onScoreUpdate }: GameControlsProps) => {
    const [currentCityIndex, setCurrentCityIndex] = useState(0);
    const [score, setScore] = useState(1500);
    const [message, setMessage] = useState('');

    const currentCity = cities.cities[currentCityIndex];

    const handleCitySelected = (lat: number, lng: number) => {
        const distance = calculateDistance(lat, lng, currentCity.position.lat, currentCity.position.lng) / 1000;
        const newScore = score - distance;
        setScore(newScore);
        onScoreUpdate(newScore);

        if (distance <= 50) {
            setMessage(`Correct! You were ${distance.toFixed(2)}km away from ${currentCity.name}.`);
        } else {
            setMessage(`Incorrect. You were ${distance.toFixed(2)}km away from ${currentCity.name}.`);
        }

        if (newScore <= 0) {
            setMessage('Game Over! No kilometers left.');
        } else {
            setCurrentCityIndex((currentCityIndex + 1) % cities.cities.length);
        }
    };

    useEffect(() => {
        setHandleCitySelected(() => handleCitySelected);
    }, [currentCityIndex, score]);

    return (
        <div className="sticky">
            <h2>Find: {currentCity.name}</h2>
            <p>{message}</p>
            <p>Score: {score.toFixed(2)} km left</p>
        </div>
    );
};

export default GameControls;