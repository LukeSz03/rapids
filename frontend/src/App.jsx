import Home from "./Home";
import Footer from "./Footer";
import Upload from "./Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
