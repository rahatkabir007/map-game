import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import {  LatLngExpression, divIcon } from 'leaflet';

interface MapProps {
    onCitySelected: (lat: number, lng: number) => void;
    markerPosition: LatLngExpression | null;
    setMarkerPosition: (markerPosition: LatLngExpression | null) => void;
}

const Map = ({ onCitySelected, markerPosition, setMarkerPosition }: MapProps) => {


    const MapEvents = () => {
        useMapEvents({
            click(e) {
                setMarkerPosition(e.latlng);
                onCitySelected(e.latlng.lat, e.latlng.lng);
            }
        });
        return null;
    };

    const customIcon = divIcon({
        className: 'custom-icon', 
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13.632A5.441 5.441 0 1 0 12 2.75a5.441 5.441 0 0 0 0 10.882m0 0v7.618"/></svg>`, 
        iconSize: [38, 95], 
    });

    return (
        <MapContainer center={[54.5260, 15.2551]} zoom={4} style={{ height: '70vh', width: '100%', border: "1px solid #d8d8d8", borderRadius: "10px" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markerPosition && <Marker position={markerPosition} icon={customIcon} />}
            <MapEvents />
        </MapContainer>
    );
};

export default Map;