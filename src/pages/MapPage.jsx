import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Loading from "../components/Loading";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 43.4723,
  lng: -80.5449,
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
        {/* STC */}
        <Marker position={{ lat: 43.470837, lng: -80.54411 }} />
        {/* SLC */}
        <Marker
          position={{ lat: 43.47185265218329, lng: -80.54534359583154 }}
        />
        {/* DC */}
        <Marker
          position={{ lat: 43.47291357044051, lng: -80.54269479945117 }}
        />
        {/* E7 */}
        <Marker
          position={{ lat: 43.47304812731901, lng: -80.53952274900837 }}
        />
      </GoogleMap>
    </div>
  ) : (
    <Loading />
  );
};

export default MapPage;
