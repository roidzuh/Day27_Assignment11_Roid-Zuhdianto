import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const MapWrapper = styled.div`
  height: 700px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 500px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 0;
  }
`;

const Map = () => {
  const position = [-7.24917, 112.75083];

  return (
    <MapWrapper data-aos="fade-right">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Restoran</Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;
