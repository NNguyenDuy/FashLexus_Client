import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { searchLocation } from "../../ultis/common";

const MyMap = ({ addressUser, onAddressChange }) => {
  const [location, setLocation] = useState({ address: "", position: [0, 0] });
  const [address, setAddress] = useState("");
  const [mapKey, setMapKey] = useState(Date.now());

  useEffect(() => {
    setAddress(addressUser);
    const fetchMap = async () => {
      const result = await searchLocation(addressUser);
      if (result.lat && result.lon) {
        setLocation({
          address: result.display_name,
          position: [parseFloat(result.lat), parseFloat(result.lon)],
        });
        setMapKey(Date.now());
      }
    };
    fetchMap();
  }, [addressUser]);

  useEffect(() => {
    setAddress(location.address);
  }, [location]);

  return (
    <div>
      <div className="mb-4 flex w-full items-center justify-between gap-3">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-10/12 border p-2"
          placeholder="Enter your address"
          onKeyDown={(e) => {
            if (e.key === "Enter") onAddressChange(address);
          }}
        />
        <button
          onClick={() => onAddressChange(address)}
          className="bg-primaryColor p-2 text-white duration-300 hover:bg-secondaryColor"
        >
          Find Address
        </button>
      </div>
      <MapContainer
        key={mapKey}
        className="h-96 w-full"
        center={location.position}
        zoom={15}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location.position}>
          <Popup>{location.address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
