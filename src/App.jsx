import Homepage from "./pages/Homepage";
import MyProjects from "./pages/MyProjects";
import AboutMe from "./pages/AboutMe";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
