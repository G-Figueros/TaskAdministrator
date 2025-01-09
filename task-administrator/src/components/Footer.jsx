import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("primary.light", "primary.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  return (
    <Box
      as="footer"
      bg={bgColor} 
      color={textColor}
      width="100%"
      position="relative"
      bottom="0"
      left="0"
      py={4}
      boxShadow="0 -4px 6px rgba(0, 0, 0, 0.1)" 
    >
      <Flex justify="flex-end" align="center" px={8}>
        <Text fontSize="sm">© Gabriel Figueros 2025</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
