import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import "./Css/Map.css";

function Map() {
  const { loginUserDetails } = useSelector((state) => state.user);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRXOD21tjCpNmpABQp8bnfNyA99pscQrM",
  });

  if (!isLoaded) return <div className="loading">Loading...</div>;

  return (
    <>
      <GoogleMap
        zoom={10}
        center={{
          lat: loginUserDetails?.address?.geo?.lat,
          lng: loginUserDetails?.address?.geo?.lng,
        }}
        mapContainerClassName="map-container"
      >
        <Marker
          position={{
            lat: loginUserDetails?.address?.geo?.lat,
            lng: loginUserDetails?.address?.geo?.lng,
          }}
        />
      </GoogleMap>
      <div className="latLong">
        <p>
          Lat {loginUserDetails?.address?.geo?.lat} Long{" "}
          {loginUserDetails?.address?.geo?.lng}
        </p>
        <p></p>
      </div>
    <div className="col md-3" style={{marginLeft:"370 px",flexDirection:"row"}}>
    <div
            
              className="user"
            >
              <div className="user-name text-dark"><h6 className="username"></h6></div>
            </div>
    </div>
    </>
  );
}

export default Map;
