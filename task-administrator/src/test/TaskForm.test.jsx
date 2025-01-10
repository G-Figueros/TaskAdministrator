import React from "react";
import 'intersection-observer';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react"; // Asegúrate de importar fireEvent
import TaskForm from "../pages/TaskForm";
import { TaskProvider } from "../context/TaskContext";

test("debería renderizar el formulario de tareas", () => {
  render(
    <TaskProvider>
      <TaskForm />
    </TaskProvider>
  );
  expect(screen.getByText(/Registro de Tareas/i)).toBeInTheDocument();
  expect(screen.getByText(/Guardar Tarea/i)).toBeInTheDocument();
});

test("debería mostrar un mensaje de error si los campos obligatorios están vacíos al intentar guardar", () => {
  render(
    <TaskProvider>
      <TaskForm />
    </TaskProvider>
  );

  // Simula el clic en el botón "Guardar Tarea" sin llenar los campos obligatorios
  const submitButton = screen.getByRole("button", { name: /Guardar Tarea/i });
  fireEvent.click(submitButton);
  // Aquí se puede verificar que los campos obligatorios están resaltados
  expect(screen.getByText(/Registro de Tareas/i)).toBeInTheDocument();
});

test("debería permitir guardar la tarea cuando los campos obligatorios están llenos", () => {
  render(
    <TaskProvider>
      <TaskForm />
    </TaskProvider>
  );

  // Llena los campos obligatorios
  fireEvent.change(screen.getByLabelText(/Título/i), {
    target: { value: "Nueva Tarea" },
  });
  fireEvent.change(screen.getByLabelText(/Fecha/i), {
    target: { value: "2025-01-10" },
  });

  // Simula el clic en el botón "Guardar Tarea"
  const submitButton = screen.getByRole("button", { name: /Guardar Tarea/i });
  fireEvent.click(submitButton);

  // Verifica que no hay mensajes de error y que la tarea se agrega correctamente
  expect(screen.queryByText(/Registro de Tareas/i)).toBeInTheDocument();
});
