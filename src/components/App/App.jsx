import { Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Bio from "../Bio/Bio";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
