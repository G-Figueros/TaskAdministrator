import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Badge,
  VStack,
  Heading,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import TaskContext from "../context/TaskContext";

const CalendarView = () => {
  const { state } = useContext(TaskContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDateTasks, setSelectedDateTasks] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const bgColor = useColorModeValue("primary.light", "primary.dark");
  const textColor = useColorModeValue("text.light", "text.dark");
  const buttonColor = useColorModeValue("button.light", "button.dark");

  const getTasksByDate = (date) =>
    state.tasks.filter(
      (task) =>
        new Date(task.date).toLocaleDateString() ===
        new Date(date).toLocaleDateString()
    );

  const getStatusColor = (status) => {
    switch (status) {
      case "pendiente":
        return "yellow";
      case "en progreso":
        return "blue";
      case "finalizado":
        return "green";
      default:
        return "gray";
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDayClick = (tasks) => {
    setSelectedDateTasks(tasks);
    onOpen();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<Box key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const tasks = getTasksByDate(date);

      calendarDays.push(
        <Box
          as={motion.div}
          key={day}
          border="1px solid"
          borderColor={textColor}
          borderRadius="md"
          p={2}
          textAlign="center"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleDayClick(tasks)}
        >
          <Heading size="sm" mb={2}>
            {day}
          </Heading>
          <VStack spacing={1}>
            {tasks.slice(0, 3).map((task) => (
              <Badge
                key={task.id}
                colorScheme={getStatusColor(task.status)}
                textAlign="center"
                width="100%"
              >
                {task.title}
              </Badge>
            ))}
            {tasks.length > 3 && (
              <Badge colorScheme="gray" textAlign="center" width="100%">
                +{tasks.length - 3} Más
              </Badge>
            )}
          </VStack>
        </Box>
      );
    }

    return calendarDays;
  };

  return (
    <Flex
      bg={bgColor}
      color={textColor}
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      p={4}
      as={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex justifyContent="space-between" width="100%" maxWidth="800px" mb={4}>
        <Button bg={buttonColor} color="white" _hover={{ bg: `${buttonColor}.600` }} onClick={handlePrevMonth}>
          Mes Anterior
        </Button>
        <Heading size="md" textAlign="center">
          {currentDate.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
        </Heading>
        <Button bg={buttonColor} color="white" _hover={{ bg: `${buttonColor}.600` }} onClick={handleNextMonth}>
          Mes Siguiente
        </Button>
      </Flex>

      <Box
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        gap={2}
        width="100%"
        maxWidth="800px"
      >
        {renderCalendarDays()}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={bgColor} color={textColor}>
          <ModalHeader fontWeight="bold">Detalles de las Tareas</ModalHeader>
          <ModalBody>
            {selectedDateTasks.length > 0 ? (
              <VStack align="stretch" spacing={3}>
                {selectedDateTasks.map((task) => (
                  <Box key={task.id} p={3} borderWidth={1} borderRadius="md">
                    <Text fontWeight="bold">Título: {task.title}</Text>
                    <Text>Descripción: {task.description}</Text>
                    <Text>Estatus: {task.status}</Text>
                  </Box>
                ))}
              </VStack>
            ) : (
              <Text>No hay tareas para este día.</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button bg={buttonColor} color="white" _hover={{ bg: `${buttonColor}.600` }} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default CalendarView;
