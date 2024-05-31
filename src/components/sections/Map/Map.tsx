import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

interface MapProps {
    onCitySelected: (lat: number, lng: number) => void;
}

const Map = ({ onCitySelected }: MapProps) => {
    const [markerPosition, setMarkerPosition] = useState<LatLngExpression | null>(null);

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                setMarkerPosition(e.latlng);
                onCitySelected(e.latlng.lat, e.latlng.lng);
            }
        });
        return null;
    };

    return (
        <MapContainer center={[54.5260, 15.2551]} zoom={4} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markerPosition && <Marker position={markerPosition} />}
            <MapEvents />
        </MapContainer>
    );
};

export default Map;