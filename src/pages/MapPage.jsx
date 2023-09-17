import {
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Image,
} from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Card from "../components/Card";
import Loading from "../components/Loading";
import MapMarker from "../components/MapMarker";
import { boba2 } from "../assets";
import "./MapPage.css";

import { boba2, close } from "../assets";

import Card from "../components/LocationCard";
import LocationCard from "../components/LocationCard";

const containerStyle = {
  border: "1px solid transparent",
  borderRadius: "20px",
  width: "100vw",
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

  const section = (
    <HStack>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <MapMarker
          name="Sweet Dreams"
          address="170 University Ave W Waterloo, ON N2L 3E9 Canada"
          lat={43.47207286948884}
          lng={-80.53905491794353}
        />
        <MapMarker
          name="Chatime"
          address="Davis Centre (DC); Ring Rd, Waterloo, ON N2L 3G1"
          lat={43.47291357044051}
          lng={-80.54269479945117}
        />
        <MapMarker
          name="The Alley"
          address="170 University Ave W, Waterloo, ON N2L 3E9"
          lat={43.47177310692343}
          lng={-80.538539933834237}
        />
        <MapMarker
          name="Gong Cha"
          address="Commercial, 330 Phillip St Unit 2, Waterloo, ON N2L 3W9"
          lat={43.47623215976741}
          lng={-80.53861950549259}
        />
        <MapMarker
          name="Machi Machi"
          address="140 University Ave W, Waterloo, ON N2L 6J3"
          lat={43.47301112552648}
          lng={-80.53501529298342}
        />
        <MapMarker
          name="Now Tea"
          address="280 Lester St #106, Waterloo, ON N2L 3W5"
          lat={43.47555180479398}
          lng={-80.53557187580549}
        />
        <MapMarker
          name="CoCo Fresh Tea & Juice"
          address="203 Lester St #3, Waterloo, ON N2L 3W4"
          lat={43.47284174311075}
          lng={80.53388417305472}
        />
      </GoogleMap>

      <Stack
        divider={<StackDivider />}
        spacing="0"
        color="#5c3e2a"
        border="1 solid transparent"
        borderRadius="20"
      >
        <Box bg="#a78054" paddingX="18" paddingY="10">
          <HStack margin="0">
            <Image
              boxSize="95"
              objectFit="cover"
              src={boba2}
              alt="boba image"
            />
            <Heading margin="0" textAlign="left" size="xs" textTransform="">
              Brown Sugar Milk Tea
            </Heading>
          </HStack>
        </Box>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </Stack>
    </HStack>
  );

  return isLoaded ? <div>{section}</div> : <Loading />;
};

export default MapPage;
