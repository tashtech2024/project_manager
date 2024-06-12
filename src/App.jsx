import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/Homepage";
import ProjectsPage from "./components/Pages/ProjectsPage";
import NavBar from "./components/NavBar";
import ProjectDetails from "./components/Pages/ProjectDetails";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />}/>
      </Routes>
    </>
  );
}

export default App;