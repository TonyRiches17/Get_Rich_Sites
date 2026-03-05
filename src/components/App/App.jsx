import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Navigate to="/about" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
