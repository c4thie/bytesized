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

const LocationCart = () => {
  return (
    <Box bg="white" paddingX="20" borderTop="1 solid black">
      <Flex alignItems="center">
        <Heading size="xs" textTransform="">
          Sweet Dreams
        </Heading>
        <Spacer />
        <Text>7.99$</Text>
      </Flex>
      <Flex direction="row" marginBottom="15">
        <Box fontSize="sm" textAlign="left" w="30">
          Hours: 11h00-0h00
        </Box>
        <Spacer />
        <Box color="#a78054" fontWeight="bold" fontSize="sm" textAlign="left">
          2.6 km
        </Box>
      </Flex>
    </Box>
  );
};

export default LocationCart;
