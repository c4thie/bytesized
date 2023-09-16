import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Loading from "../components/Loading";
import { icon } from "../assets";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 43.473046551051176,
  lng: -80.53836586627632,
};

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC-HOySpdgEI_RDb-LBB_ed_jqr0DM0FQk",
  });

  return isLoaded ? (
    <div>
      byte sized map
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <MarkerF
          position={{ lat: 43.47291357044051, lng: -80.54269479945117 }}
          icon={icon}
          // label="Chatime"
        />
        <MarkerF
          position={{ lat: 43.47207286948884, lng: -80.53905491794353 }}
          icon={icon}
          // label="Sweet Dreams"
        />
        <MarkerF
          position={{ lat: 43.47177310692343, lng: -80.538539933834237 }}
          icon={icon}
          // label="The Alley"
        />
        <MarkerF
          position={{ lat: 43.47623215976741, lng: -80.53861950549259 }}
          icon={icon}
          // label="Gong Cha"
        />
        <MarkerF
          position={{ lat: 43.47301112552648, lng: -80.53501529298342 }}
          icon={icon}
          // label="Machi Machi"
        />
        <MarkerF
          position={{ lat: 43.47284174311075, lng: -80.53388417305472 }}
          icon={icon}
          // label="CoCo Fresh Tea & Juice"
        />
        <MarkerF
          position={{ lat: 43.47555180479398, lng: -80.53557187580549 }}
          icon={icon}
          // label="Now Tea"
        />
      </GoogleMap>
    </div>
  ) : (
    <Loading />
  );
};

export default MapPage;
