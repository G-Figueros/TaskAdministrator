import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/WelcomePage";
import TaskForm from "./pages/TaskForm";
import CalendarView from "./pages/CalendarView";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/crud" element={<TaskForm />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
