import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomePage from "./pages/WelcomePage";
import TaskForm from "./pages/TaskForm";
import CalendarView from "./pages/CalendarView";
import AboutPage from "./pages/AboutPage";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh" >
          <Navbar />
          <Box flex="1" pb={8}> 
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/crud" element={<TaskForm />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </TaskProvider>
  );
};

export default App;
