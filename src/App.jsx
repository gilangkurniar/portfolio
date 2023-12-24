import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

function App() {

  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={About} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
