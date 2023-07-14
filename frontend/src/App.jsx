import Home from "./Home";
import Upload from "./Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
