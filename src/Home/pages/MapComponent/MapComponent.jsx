import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ location }) => {
  const handleGoogleMapsClick = () => {
    const [lat, lng] = location;
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
  };

  return (
    <div>
      <MapContainer center={location} zoom={13} style={{ width: '100%', height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          <Popup>kyurius tech studio</Popup>
        </Marker>
      </MapContainer>
      <button onClick={handleGoogleMapsClick}>Open Google Maps</button>
    </div>
  );
};

export default MapComponent;
