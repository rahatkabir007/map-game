import React, { useState, useEffect } from 'react';
import cities from '../../../datas/cities.json';
import { calculateDistance } from '../../../utils/distance';

interface GameControlsProps {
    setHandleCitySelected: (handler: (lat: number, lng: number) => void) => void;
}

const GameControls = ({ setHandleCitySelected }: GameControlsProps) => {
    const [currentCityIndex, setCurrentCityIndex] = useState(0);
    const [score, setScore] = useState(1500);
    const [message, setMessage] = useState('');

    const currentCity = cities.cities[currentCityIndex];

    const handleCitySelected = (lat: number, lng: number) => {
        const distance = calculateDistance(lat, lng, currentCity.position.lat, currentCity.position.lng) / 1000;
        const newScore = score - distance;
        setScore(newScore);
        // onScoreUpdate(newScore);

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


    const messageColor = (message: string) => {
        if (message.includes('Correct')) { 
            return '#304D30';
        }
        else if (message.includes("Incorrect")) {
            return '#E72929';
        }
        else {
            return '#FF0000';
        }
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <div className='flex justify-end'>
                <span><span className='font-semibold text-xl'>Score:</span> {score.toFixed(2)} km left</span>
            </div>
            <span><span className='font-semibold text-xl'>Mission:</span> You Have to Find The City - {currentCity.name}</span>
            <span className='text-lg ' style={{
                color: messageColor(message)
            }}>{message}</span>
           
        </div>
    );
};

export default GameControls;