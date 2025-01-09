import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("debería renderizar el texto de navegación", () => {
  render(<Navbar />);
  expect(screen.getByText(/Gestión de Tareas/i)).toBeInTheDocument();
  expect(screen.getByText(/Calendario/i)).toBeInTheDocument();
  expect(screen.getByText(/Acerca de/i)).toBeInTheDocument();
});
