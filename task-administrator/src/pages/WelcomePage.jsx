import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const bgColor = useColorModeValue("primary.light", "primary.dark");
  const textColor = useColorModeValue("text.light", "text.dark");
  const buttonColor = useColorModeValue("button.light", "button.dark");
  const boxBgColor = useColorModeValue("primary.light", "primary.dark"); 

  const checklistItems = [
    "Crear tareas rápidamente",
    "Gestionar fechas importantes",
    "Supervisar el progreso del equipo",
    "Mantener el control de tus proyectos",
  ];

  const leftTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.4, 
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.3, 
      },
    }),
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      height="100vh"
      bg={bgColor}
      color={textColor}
      p={8}
    >
      <Flex
        flex={1}
        align="center" 
        justify="center" 
      >
        <Box
          p={8}
          borderRadius="md"
          boxShadow="md"
          bg={boxBgColor} 
          maxWidth="80%"
        >
          <VStack spacing={4} align="stretch">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={leftTextVariants}
              custom={0}
            >
              <Heading size="4xl" textAlign="left">
                Te doy la bienvenida a Task Administrator
              </Heading>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={leftTextVariants}
              custom={1} 
            >
              <Text fontSize="2xl" textAlign="justify">
                Esta plataforma te ayuda a mantener tus proyectos bajo
                control de una forma más organizada. Con Task Administrator,
                gestionar tiempos y alcanzar tus objetivos será más fácil que
                nunca.
              </Text>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={leftTextVariants}
              custom={2}
            >
              <Link to="/crud">
                <Button
                  bg={buttonColor}
                  color="white"
                  _hover={{ bg: "rgba(128, 90, 213, 0.8)" }}
                  size="lg"
                  width="100%"
                >
                  Ir a Gestión de Tareas
                </Button>
              </Link>
            </motion.div>
          </VStack>
        </Box>
      </Flex>

      <Flex
        flex={1}
        align="center" 
        justify="center" 
      >
        <Box
          p={8}
          borderRadius="md"
          boxShadow="md"
          bg={boxBgColor} 
          maxWidth="80%" 
        >
          <VStack align="flex-start" spacing={6}>
            {checklistItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <HStack spacing={4} fontSize="2xl">
                  <Icon as={CheckCircleIcon} color={buttonColor} boxSize={8} />
                  <Text fontSize="2xl">{item}</Text>
                </HStack>
              </motion.div>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WelcomePage;
