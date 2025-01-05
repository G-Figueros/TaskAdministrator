import React, { useContext } from "react";
import Calendar from "react-calendar";
import { Box, Badge, VStack } from "@chakra-ui/react";
import TaskContext from "../context/TaskContext";

const CalendarView = () => {
  const { state } = useContext(TaskContext);

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

  return (
    <Box p={4}>
      <Calendar
        tileContent={({ date }) => {
          const tasks = getTasksByDate(date);
          return tasks.length > 0 ? (
            <VStack>
              {tasks.map((task) => (
                <Badge
                  key={task.id}
                  colorScheme={getStatusColor(task.status)}
                  width="full"
                  textAlign="center"
                >
                  {task.title}
                </Badge>
              ))}
            </VStack>
          ) : null;
        }}
      />
    </Box>
  );
};

export default CalendarView;
