import React from "react";
import 'intersection-observer';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar'; 

test("debería renderizar el texto de navegación", () => {
  render(
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ChakraProvider>
  );

  expect(screen.getByText(/Gestión de Tareas/i)).toBeInTheDocument();
  expect(screen.getByText(/Calendario/i)).toBeInTheDocument();
  expect(screen.getByText(/Acerca de/i)).toBeInTheDocument();
});