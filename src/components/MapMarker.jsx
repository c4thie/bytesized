import React, { useEffect, useState } from "react";
import { InfoBox, MarkerF } from "@react-google-maps/api";
import { close, icon } from "../assets";

/*
props:
  - name
  - address
  - lat
  - lng
*/
const MapMarker = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, [isOpen]);

  const toggleOpenHandler = () => {
    setIsOpen(true);
  };

  const toggleCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <MarkerF
      position={{ lat: props.lat, lng: props.lng }}
      icon={icon}
      onClick={toggleOpenHandler}
    >
      {isOpen && (
        <InfoBox
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
              <img src={close} alt="close" onClick={toggleCloseHandler} />
              <h4 className="infobox-title">{props.name}</h4>
              <p className="infobox-address">{props.address}</p>
            </div>
          </div>
        </InfoBox>
      )}
    </MarkerF>
  );
};

export default MapMarker;
