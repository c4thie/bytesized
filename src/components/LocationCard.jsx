import React from "react";

import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
  Image,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  GoogleMap,
  MarkerF,
  OverlayView,
  useJsApiLoader,
  InfoBox,
  Marker,
} from "@react-google-maps/api";
import Loading from "./Loading";

const LocationCard = ({ name, hours, distance, price, lat, lng }) => {
  return (
    <Box bg="white" paddingX="20" borderTop="1 solid black">
      <Flex alignItems="center">
        <Heading size="xs" textTransform="" textAlign="left">
          {name}
        </Heading>
        <Spacer />
        <Text>{price}$</Text>
      </Flex>
      <Flex direction="row" marginBottom="15">
        <Box fontSize="sm" textAlign="left" w="30">
          {hours}
        </Box>
        <Spacer />
        <Box color="#a78054" fontWeight="bold" fontSize="sm" textAlign="left">
          {distance} km
        </Box>
      </Flex>
    </Box>
  );
};

export default LocationCard;
