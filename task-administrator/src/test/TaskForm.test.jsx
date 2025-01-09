import { render, screen } from "@testing-library/react";
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
