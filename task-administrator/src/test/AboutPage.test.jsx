import React from "react";
import 'intersection-observer';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutPage from "../pages/AboutPage";

test("debería renderizar la página Acerca de", () => {
  render(<AboutPage />);
  expect(screen.getByText(/Hola, soy Gabriel Figueros/i)).toBeInTheDocument();
  expect(screen.getByText(/Certificaciones Recientes/i)).toBeInTheDocument();
});
