import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Box textAlign="center" p={10}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="2xl" mb={4}>
          ¡Bienvenido a Task Administrator!
        </Heading>
        <Text fontSize="xl" mb={6}>
          Organiza tus tareas y consulta tu calendario fácilmente.
        </Text>
        <Link to="/crud">
          <Button colorScheme="blue" size="lg">
            Ir a la Gestión de Tareas
          </Button>
        </Link>
      </motion.div>
    </Box>
  );
};

export default WelcomePage;
