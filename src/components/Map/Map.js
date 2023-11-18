// MapComponent.js
"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
const MapComponent = () => {
  const position = [44.7645649, 17.1879852];

  const markerIcon = new L.Icon({
    iconUrl: "/marker.png",
    iconSize: [80, 80],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  return (
    <div className="w-full flex items-center px-6 lg:px-12 z-10 py-6 lg:py-12">
      <MapContainer
        center={position}
        zoom={14}
        className="rounded-xl"
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
