import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./pages/TaskList";
import CalendarView from "./pages/CalendarView";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/calendar" element={<CalendarView />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
