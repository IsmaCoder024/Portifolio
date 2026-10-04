import Homepage from "./pages/Homepage";
import MyProjects from "./pages/MyProjects";
import AboutMe from "./pages/AboutMe";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
