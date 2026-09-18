import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";


export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}