import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
///import About from "./pages/About";
///import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
     
      </Routes>
    </BrowserRouter>
  );
}