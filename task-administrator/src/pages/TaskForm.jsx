import React, { useContext, useState } from "react";
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
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button as MUIButton } from "@mui/material";
import { motion } from "framer-motion";

const TaskForm = () => {
  const { state, dispatch } = useContext(TaskContext);

  // Colores globales
  const formBgColor = useColorModeValue("primary.light", "primary.dark");
  const buttonColor = useColorModeValue("button.light", "button.dark");

  // Estado del formulario
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
        dispatch({ type: "UPDATE_TASK", payload: formData });
      } else {
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

  // Tema de Material UI
  const muiTheme = createTheme({
    palette: {
      mode: useColorModeValue("light", "dark"), // Sincroniza con el tema de Chakra UI
    },
  });

  // Variantes de animación
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const tableVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <Box display="flex" gap={8} height="100vh" p={8} pt="100">
      {/* Formulario de Registro de Tareas*/}
      <Box
        as={motion.div}
        variants={formVariants}
        initial="hidden"
        animate="visible"
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg={formBgColor}
        p={12}
        borderRadius="lg"
        boxShadow="lg"
        width={{ base: "95%", md: "80%" }}
      >
        <Heading size="lg" mb={6}>
          Registro de Tareas
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} width="100%">
            <FormControl isRequired>
              <FormLabel>Título</FormLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                width="100%"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                width="100%"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Estatus</FormLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                width="100%"
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
                width="100%"
              />
            </FormControl>
            <Button
              type="submit"
              bg={buttonColor}
              color="white"
              _hover={{ bg: "rgba(128, 90, 213, 0.8)" }}
              size="lg"
              width="100%"
            >
              {formData.id ? "Actualizar Tarea" : "Guardar Tarea"}
            </Button>
          </VStack>
        </form>
      </Box>

      {/* Tabla de Historial de Tareas */}
      <Box
        as={motion.div}
        variants={tableVariants}
        initial="hidden"
        animate="visible"
        flex="2"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box width="100%" height="500px">
          <Heading size="lg" mb={6}>
            Historial
          </Heading>
          <ThemeProvider theme={muiTheme}>
            <DataGrid
              rows={state.tasks}
              columns={[
                { field: "id", headerName: "Id", flex: 1 },
                { field: "title", headerName: "Título", flex: 2 },
                { field: "description", headerName: "Descripción", flex: 4 },
                { field: "status", headerName: "Estatus", flex: 2 },
                { field: "date", headerName: "Fecha", flex: 2 },
                {
                  field: "actions",
                  headerName: "Acciones",
                  flex: 2,
                  renderCell: (params) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        height: "100%",
                      }}
                    >
                      <MUIButton
                        style={{
                          backgroundColor: "rgb(240, 181, 17)",
                          color: "white",
                        }}
                        size="small"
                        onClick={() => handleEdit(params.row)}
                      >
                        Editar
                      </MUIButton>
                      <MUIButton
                        style={{
                          backgroundColor: "rgb(199, 20, 20)",
                          color: "white",
                        }}
                        size="small"
                        onClick={() => handleDelete(params.row.id)}
                      >
                        Eliminar
                      </MUIButton>
                    </div>
                  ),
                },
              ]}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              disableColumnResize
              sx={{
                "& .MuiDataGrid-cell": {
                  fontWeight: "bold",
                },
                "& .MuiDataGrid-columnHeaders": {
                  fontWeight: "bold",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold",
                },
              }}
            />
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskForm;
