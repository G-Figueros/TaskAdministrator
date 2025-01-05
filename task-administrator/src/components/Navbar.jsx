import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Button,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex bg="blue.500" p={4} color="white" align="center">
      {/* Root pages */}
      <HStack spacing={4}>
        <Link to="/">
          <Button variant="link" color="white">
            Inicio
          </Button>
        </Link>
        <Link to="/crud">
          <Button variant="link" color="white">
            Gestión de Tareas
          </Button>
        </Link>
        <Link to="/calendar">
          <Button variant="link" color="white">
            Calendario
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="link" color="white">
            Mis Datos
          </Button>
        </Link>
      </HStack>
      <Spacer />
      {/* Pendiente trabajar en modo oscuro y claro del app */}
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        colorScheme="teal"
      />
    </Flex>
  );
};

export default Navbar;
