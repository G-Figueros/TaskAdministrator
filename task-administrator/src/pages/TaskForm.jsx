import React, { useContext, useState, useEffect } from "react";
import TaskContext from "../context/TaskContext";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const TaskForm = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    status: "pendiente",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.date) {
      if (formData.id) {
        // Editar tarea existente
        dispatch({
          type: "UPDATE_TASK",
          payload: formData,
        });
      } else {
        // Crear nueva tarea
        dispatch({
          type: "ADD_TASK",
          payload: { ...formData, id: Date.now() },
        });
      }
      setFormData({ id: null, title: "", description: "", status: "pendiente", date: "" });
    }
  };

  const handleEdit = (task) => {
    setFormData(task);
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <Box p={8} maxWidth="800px" mx="auto" mt={8}>
      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Título de la Tarea</FormLabel>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Descripción</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Estatus</FormLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="pendiente">Pendiente</option>
              <option value="en progreso">En Progreso</option>
              <option value="finalizado">Finalizado</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Fecha</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="full">
            {formData.id ? "Actualizar Tarea" : "Guardar Tarea"}
          </Button>
        </VStack>
      </form>

      {/* Tabla de tareas */}
      <Table variant="simple" mt={8}>
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th>Descripción</Th>
            <Th>Estatus</Th>
            <Th>Fecha</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {state.tasks.map((task) => (
            <Tr key={task.id}>
              <Td>{task.title}</Td>
              <Td>{task.description}</Td>
              <Td>{task.status}</Td>
              <Td>{new Date(task.date).toLocaleDateString()}</Td>
              <Td>
                <Button
                  size="sm"
                  colorScheme="yellow"
                  onClick={() => handleEdit(task)}
                >
                  Editar
                </Button>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDelete(task.id)}
                  ml={2}
                >
                  Eliminar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TaskForm;
