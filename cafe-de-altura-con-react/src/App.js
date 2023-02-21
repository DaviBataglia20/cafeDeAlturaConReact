import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Shop from "./pages/Shop"
import Cesta from "./pages/Cesta"

function App() {
  return (
    <div className="w-full  min-h-screen">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="Shop" element={<Shop />} />
            <Route path="Cesta" element={<Cesta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
