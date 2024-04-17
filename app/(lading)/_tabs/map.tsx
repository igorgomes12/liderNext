"use client";
import { FC } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/src/images/marker.svg";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const myIcon = L.icon({
  iconUrl: "logo_icon.png",
  iconSize: [70, 70],
  iconAnchor: [50, 50],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

interface MapProps {
  center?: number[];
}

const Map: FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [-20, -45]}
      zoom={center ? 13 : 2}
      className="h-[50vh] -z-10 rounded-lg cursor-default"
    >
      <TileLayer
        attribution='&copy; <a href="http://maps.gstatic.com/">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.jpg"
      />
      {center && (
        <Marker
          icon={myIcon}
          alt="Líder Automação"
          position={center as L.LatLngExpression}
        />
      )}
    </MapContainer>
  );
};

export default Map;
