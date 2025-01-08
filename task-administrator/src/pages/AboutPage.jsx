import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import profileImage from "../assets/Gabriel.png";
import lifelongLearningImage from "../assets/LifelongLearning.png";
import RemoteWorkImage from "../assets/RemoteWork.png";
import CcnaIntroductionToNetworkImage from "../assets/CcnaIntroductionToNetworks.png";
import SoftwareDevelopmentFundamentalsImage from "../assets/SoftwareDevelopmentFundamentals.png";
import PythonImage from "../assets/Python.png";


const photos = [
  { src: lifelongLearningImage, alt: "Foto 1", size: "large" },
  { src: SoftwareDevelopmentFundamentalsImage, alt: "Foto 2", size: "small" },
  { src: PythonImage, alt: "Foto 3", size: "medium" },
  { src: RemoteWorkImage, alt: "Foto 4", size: "large" },
  { src: CcnaIntroductionToNetworkImage, alt: "Foto 5", size: "small" },
];

const AboutPage = () => {
  const bgColor = useColorModeValue("primary.light", "primary.dark");
  const textColor = useColorModeValue("text.light", "text.dark");

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <Box bg={bgColor} color={textColor}>
      <Flex
        direction={{ base: "column", md: "row" }}
        height="100vh"
        p={8}
        gap={4}
      >
        <Flex
          flex={1}
          align="center"
          justify="center"
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <Image
            src={profileImage}
            alt="Foto profesional"
            boxSize={{ base: "200px", md: "300px" }}
            borderRadius="full"
            boxShadow="lg"
          />
        </Flex>

        <Flex flex={1} align="center" justify="flex-start" ml={{ base: 0, md: -4 }}>
          <Box maxWidth="600px">
            <VStack spacing={4} align="stretch">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                custom={0}
              >
                <Heading size="2xl">Hola, soy Gabriel Figueros</Heading>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                custom={1}
              >
                <Text fontSize="lg" textAlign="justify">
                  Desarrollador y estudiante de Ingeniería en Sistemas. Esta
                  aplicación es un reflejo de mi dedicación y aprendizaje,
                  desarrollada con tecnologías modernas como React, con el
                  objetivo de obtener mi certificación en React Frontend. Me
                  motiva a seguir creando soluciones útiles que transformen
                  ideas en herramientas prácticas, y este proyecto es una
                  muestra de ese compromiso.
                </Text>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                custom={2}
              >
                <HStack spacing={6}>
                  <a
                    href="https://www.linkedin.com/in/gabriel-figueros-918498211"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={FaLinkedin} boxSize={8} color="blue.600" />
                  </a>
                  <a
                    href="https://github.com/G-Figueros"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={FaGithub} boxSize={8} color="gray.600" />
                  </a>
                </HStack>
              </motion.div>
            </VStack>
          </Box>
        </Flex>
      </Flex>

      <Box mt={12} px={8}>
        <Flex wrap="wrap" justify="center" gap={6}>
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: photo.size === "large" ? "300px" : photo.size === "medium" ? "200px" : "150px",
                  height: "auto",
                  objectFit: "cover",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutPage;
