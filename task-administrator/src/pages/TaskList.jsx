import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { Box, Button, Input, VStack, HStack } from "@chakra-ui/react";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), title: newTask, date: "", status: "Por hacer" },
      });
      setNewTask("");
    }
  };

  const updateTask = () => {
    if (editTask.title.trim()) {
      dispatch({
        type: "UPDATE_TASK",
        payload: editTask,
      });
      setEditTask(null);
    }
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box p={4}>
        <Input
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={addTask} mt={2} colorScheme="blue">
          Añadir
        </Button>
      </Box>
      <VStack>
        {state.tasks.map((task) => (
          <HStack
            key={task.id}
            justify="space-between"
            w="100%"
            p={4}
            bg="gray.100"
            borderRadius="md"
          >
            {editTask && editTask.id === task.id ? (
              <>
                <Input
                  value={editTask.title}
                  onChange={(e) =>
                    setEditTask({ ...editTask, title: e.target.value })
                  }
                />
                <Button onClick={updateTask} colorScheme="green">
                  Guardar
                </Button>
              </>
            ) : (
              <>
                <Box>{task.title}</Box>
                <HStack>
                  <Button
                    onClick={() => setEditTask(task)}
                    colorScheme="yellow"
                  >
                    Editar
                  </Button>
                  <Button onClick={() => deleteTask(task.id)} colorScheme="red">
                    Eliminar
                  </Button>
                </HStack>
              </>
            )}
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default TaskList;
