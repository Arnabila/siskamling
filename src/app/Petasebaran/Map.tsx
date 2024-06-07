// 1. Import dependencies for React, Leaflet and other functionalities.
import React, { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

// 2. Define the interface for MarkerData.
interface MarkerData {
  coordinates: [number, number];
  title: string;
}

// 3. Main component definition.
const MapComponent: FC = () => {
  // 4. Define a static marker data
  const markerData: MarkerData = {
    coordinates: [-7.2874102, 112.7780475],
    title: "Lokasi Saya",
  };

  // 5. Return the JSX for rendering.
  return (
    <>
      {/* 6. Add the map container. */}
      <MapContainer
        center={markerData.coordinates}
        zoom={15}
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* 7. Set the tile layer for the map. */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 8. Render the marker. */}
        <Marker position={markerData.coordinates}>
          <Popup>{markerData.title}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

// 9. Export the MapComponent.
export default MapComponent;
