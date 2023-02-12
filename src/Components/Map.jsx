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
      {/* <GoogleMap
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
      </div> */}
      <img style={{width:"inherit",    borderRadius:" 29px"}} src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idL4G10Bsh.k/v0/1200x-1.png" alt="" />
    <div className="col md-3" style={{marginLeft:"370 px",flexDirection:"row"}}>
    <div
            
              className="user"
            >
              <p style={{marginLeft:"375px"}}>Lat : </p><p style={{fontWeight:"bold",fontSize:"15px" , color:"grey",marginLeft:"7px"}}>37.8457</p> <p className="ms-2">Lang :  </p>  <p style={{fontWeight:"bold",fontSize:"15px" , color:"grey",marginLeft:"7px"}}>84.6478</p>
              <div className="user-name text-dark"><h6 className="username"></h6></div>
            </div>
    </div>
    </>
  );
}

export default Map;
