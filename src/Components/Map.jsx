import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import "./Css/Map.css";

function Map() {
  const { loginUserDetails } = useSelector((state) => state.user);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRXOD21tjCpNmpABQp8bnfNyA99pscQrM",
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
      >
        <Marker position={{ lat: 44, lng: -80 }} />
      </GoogleMap>
      <div className="latLong">
        <p>
          Lat {loginUserDetails?.address?.geo?.lat} Long{" "}
          {loginUserDetails?.address?.geo?.lng}
        </p>
        <p></p>
      </div>
    </>
  );
}

export default Map;
