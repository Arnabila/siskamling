import "leaflet/dist/leaflet.css";
import style from "../../styles/Home.module.css";

import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      center={[-7.281, 112.776]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
