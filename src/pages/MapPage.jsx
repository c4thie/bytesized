import { useState, useEffect } from "react";
import {
  GoogleMap,
  MarkerF,
  OverlayView,
  useJsApiLoader,
  InfoBox,
  Marker,
} from "@react-google-maps/api";
import Loading from "../components/Loading";
import "./MapPage.css";

import { close } from "../assets";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 43.473046551051176,
  lng: -80.53836586627632,
};

const MapPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC-HOySpdgEI_RDb-LBB_ed_jqr0DM0FQk",
  });

  useEffect(() => {}, [isOpen]);

  const toggleOpenHandler = (prevState) => {
    setIsOpen(true);
  };

  const toggleCloseHandler = (prevState) => {
    setIsOpen(false);
  };

  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

  const section = (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
      <MarkerF
        position={{ lat: 43.47207286948884, lng: -80.53905491794353 }}
        onClick={toggleOpenHandler}
      >
        {isOpen && (
          <InfoBox
            // defaultPosition={
            //   new google.maps.LatLng(
            //     43.47207286948884 - 10,
            //     -80.53905491794353 - 10
            //   )
            // }
            onCloseClick={toggleCloseHandler}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
          >
            <div
              style={{
                backgroundColor: `white`,
                borderRadius: `8px`,
                boxShadow: `2px 2px 2px 2px rgba(0, 0, 0, 0.2)`,
                opacity: 1,
                padding: `12px`,
              }}
            >
              <div className="infobox">
                <img src={close} alt="close" />
                <h4 className="infobox-title">Sweet Dreams</h4>
                <p className="infobox-address">
                  170 University Ave W Waterloo, ON N2L 3E9 Canada
                </p>
              </div>
            </div>
          </InfoBox>
        )}
      </MarkerF>
    </GoogleMap>
  );

  return isLoaded ? (
    <div>
      byte sized map
      {section}
      {/* <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
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
      </GoogleMap> */}
    </div>
  ) : (
    <Loading />
  );
};

export default MapPage;
