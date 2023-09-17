import { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Image,
  Text,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import LocationCard from "../components/LocationCard";
import Loading from "../components/Loading";
import MapMarker from "../components/MapMarker";
import {
  boba2,
  pinkTwinkle,
  bobaquiz12,
  bobaquiz23,
  bobaquiz24,
  bobaquiz22,
} from "../assets";
import { motion } from "framer-motion";
import "./MapPage.css";

const containerStyle = {
  border: "1px solid transparent",
  borderRadius: "20px",
  width: "70vw",
  height: "575px",
};

const container = {
  hidden: {
    opacity: 0,
    transition: { duration: 2 },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 0,
      staggerDirection: -1,
    },
  },
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

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1750);

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
        maxHeight="575"
        overflowY="scroll"
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
              src={"res.image" || boba2}
              alt="boba image"
            />
            <Flex direction="column">
              <Text
                margin="0"
                textAlign="left"
                fontSize="xl"
                fontWeight="bold"
                textTransform=""
              >
                Your result is:
              </Text>
              <Text
                margin="0"
                textAlign="left"
                fontSize="3xl"
                fontWeight="bold"
                textTransform=""
              >
                {"res.name" || "Brown Sugar Milk Tea"}
              </Text>
              <ChakraLink
                as={ReactRouterLink}
                to="/quiz"
                color="#f4f4f4"
                margin="0"
                textAlign="left"
                fontSize="xl"
                fontWeight="bold"
                textDecoration="none"
                alignItems="center"
              >
                <ArrowBackIcon
                  marginRight="1"
                  marginTop="5"
                  verticalAlign="top"
                />{" "}
                Retake Quiz
              </ChakraLink>
            </Flex>
          </HStack>
        </Box>
        <LocationCard
          name="CoCo Fresh Tea & Juice"
          distance={2.9}
          price={8.99}
          hours="11:00-23:00"
          lat={43.47284174311075}
          lng={80.53388417305472}
        />
        <LocationCard
          name="Now Tea"
          distance={2.6}
          price={7.99}
          hours="11:00-23:00"
          lat={43.47555180479398}
          lng={-80.53557187580549}
        />
        <LocationCard
          name="Machi Machi"
          distance={2.5}
          price={10.99}
          hours="11:00-23:00"
          lat={43.47301112552648}
          lng={-80.53501529298342}
        />
        <LocationCard
          name="Gong Cha"
          distance={1.4}
          price={8.99}
          hours="11:00-23:00"
          lat={43.47623215976741}
          lng={-80.53861950549259}
        />
        <LocationCard
          name="The Alley"
          distance={1.0}
          price={5.99}
          hours="11:00-23:00"
          lat={43.47177310692343}
          lng={-80.538539933834237}
        />
        <LocationCard
          name="Chatime"
          distance={0.9}
          price={5.99}
          hours="11:00-23:00"
          lat={43.47291357044051}
          lng={-80.54269479945117}
        />
        <LocationCard
          name="Sweet Dreams"
          distance={1.0}
          price={7.99}
          hours="11:00-23:00"
          lat={43.47207286948884}
          lng={-80.53905491794353}
        />
      </Stack>
    </HStack>
  );

  return !isLoading ? (
    <motion.div variants={container} initial="hidden" animate="show">
      {section}
    </motion.div>
  ) : (
    <Loading />
  );
};

export default MapPage;
