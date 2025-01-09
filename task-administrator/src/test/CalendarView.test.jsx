import { render, screen } from "@testing-library/react";
import CalendarView from "../pages/CalendarView";
import { TaskProvider } from "../context/TaskContext";

test("debería renderizar el calendario", () => {
  render(
    <TaskProvider>
      <CalendarView />
    </TaskProvider>
  );
  expect(screen.getByText(/Mes Anterior/i)).toBeInTheDocument();
  expect(screen.getByText(/Mes Siguiente/i)).toBeInTheDocument();
});
