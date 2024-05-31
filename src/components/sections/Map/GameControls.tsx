import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import cities from '../../../datas/cities.json';
import { calculateDistance } from '../../../utils/distance';
import { LatLngExpression } from 'leaflet';
interface GameControlsProps {
    setHandleCitySelected: (handler: (lat: number, lng: number) => void) => void;
    setMarkerPosition: (markerPosition: LatLngExpression | null) => void;
    
}

const GameControls = ({ setHandleCitySelected, setMarkerPosition }: GameControlsProps) => {
    const [currentCityIndex, setCurrentCityIndex] = useState(0);
    const [score, setScore] = useState(1500);
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const navigate = useNavigate();

    const currentCity = cities.cities[currentCityIndex];

    const handleCitySelected = (lat: number, lng: number) => {
        if (gameOver) return;

        const distance = calculateDistance(lat, lng, currentCity.position.lat, currentCity.position.lng) / 1000;
        const newScore = Math.max(score - distance, 0);
        setScore(newScore);

        if (distance <= 50) {
            setMessage(`Correct! You were ${distance.toFixed(2)}km away from ${currentCity.name}.`);
        } else {
            setMessage(`Incorrect. You were ${distance.toFixed(2)}km away from ${currentCity.name}.`);
        }

        if (newScore <= 0) {
            setMessage('Game Over! No kilometers left.');
            setGameOver(true);
        } else {
            setCurrentCityIndex((currentCityIndex + 1) % cities.cities.length);
        }
    };

    useEffect(() => {
        setHandleCitySelected(() => handleCitySelected);
    }, [currentCityIndex, score, gameOver]);

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

    const resetGame = () => {
        setCurrentCityIndex(0);
        setScore(1500);
        setMessage('');
        setGameOver(false);
        setMarkerPosition(null)
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <div className='flex items-center gap-2 justify-start'>
                <Link to={"/"} className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.027 7.232a1 1 0 0 1 1.408.128l2.083 2.5a1 1 0 0 1-1.536 1.28l-2.083-2.5a1 1 0 0 1 .128-1.408" /><path d="M15.027 13.768a1 1 0 0 1-.129-1.408l2.084-2.5a1 1 0 1 1 1.536 1.28l-2.083 2.5a1 1 0 0 1-1.408.128" /><path d="M17.5 10.5a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h6.5a1 1 0 0 1 1 1M3 3.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 14a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" /><path d="M13 2.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-9-10a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0v-14a1 1 0 0 1 1-1" /></g></svg>
                    <span>Leave</span></Link>
                <button className='flex gap-2 items-center' onClick={resetGame}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3s-3 1.331-3 3s1.329 3 3 3" /><path fill="currentColor" d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219a9.053 9.053 0 0 0-2.43-2.43a8.95 8.95 0 0 0-3.219-1.355a9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053a7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725a7.11 7.11 0 0 1-.644 1.188a7.2 7.2 0 0 1-.858 1.039a7.028 7.028 0 0 1-3.536 1.907a7.13 7.13 0 0 1-2.822 0a6.961 6.961 0 0 1-2.503-1.054a7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034a9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183a9.014 9.014 0 0 0 3.218-1.355a8.886 8.886 0 0 0 1.331-1.099a9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814" /></svg>
                    <span>Reset</span></button>
            </div>
            <div className='flex justify-end'>
                <span><span className='font-semibold text-xl'>Score:</span> {score.toFixed(2)} km left</span>
            </div>
            <span><span className='font-semibold text-xl'>Mission:</span> You Have to Find The City - {currentCity.name}</span>
            <span className='text-lg ' style={{
                color: messageColor(message)
            }}>{message}</span>
            {gameOver && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]'>
                    <div className=' p-4 rounded flex justify-center items-center gap-2 w-[1000px] h-[500px]'>
                        <button className='inline-flex items-center gap-2 outline-none cursor-pointer border-2 border-black rounded text-white bg-black text-xl font-semibold leading-7 px-5 py-3 text-center transition-all duration-150 ease-in hover:text-black hover:bg-[#f5d176]' onClick={resetGame}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3s-3 1.331-3 3s1.329 3 3 3" /><path fill="currentColor" d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219a9.053 9.053 0 0 0-2.43-2.43a8.95 8.95 0 0 0-3.219-1.355a9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053a7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725a7.11 7.11 0 0 1-.644 1.188a7.2 7.2 0 0 1-.858 1.039a7.028 7.028 0 0 1-3.536 1.907a7.13 7.13 0 0 1-2.822 0a6.961 6.961 0 0 1-2.503-1.054a7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034a9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183a9.014 9.014 0 0 0 3.218-1.355a8.886 8.886 0 0 0 1.331-1.099a9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814" /></svg>
                            <span>Play Again</span>

                        </button>
                        <button className='inline-flex items-center gap-2 outline-none cursor-pointer border-2 border-black rounded text-white bg-black text-xl font-semibold leading-7 px-5 py-3 text-center transition-all duration-150 ease-in hover:text-black hover:bg-[#f5d176]' onClick={() => navigate('/')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" /></svg>
                            <span>Menu</span>
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default GameControls;