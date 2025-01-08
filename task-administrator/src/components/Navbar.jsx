import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Image,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navItems = [
    { name: "Gestión de Tareas", path: "/crud" },
    { name: "Calendario", path: "/calendar" },
    { name: "Acerca de", path: "/about" },
  ];

  return (
    <Flex
      bg={colorMode === "light" ? "primary.light" : "primary.dark"}
      p={4}
      color={colorMode === "light" ? "text.light" : "text.dark"}
      align="center"
      justify="space-between"
      position="relative"
    >
     <NavLink to="/">
        <Image
          src="/src/assets/HomeIcon.png"
          alt="Inicio"
          width="80px" 
          height="auto" 
          borderRadius="full"
          cursor="pointer"
        />
      </NavLink>

      <HStack spacing={8} justify="center" flex={1}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              backgroundColor: isActive
                ? colorMode === "light"
                  ? "rgba(128, 90, 213, 0.2)" 
                  : "rgba(213, 63, 140, 0.2)"
                : "transparent",
              color: "inherit",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </HStack>

      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        colorScheme={colorMode === "light" ? "purple" : "pink"}
      />
    </Flex>
  );
};

export default Navbar;
