import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { NotFound } from "./pages/not-found";
import { Product } from "./pages/product";
import { Description } from "./pages/product/description";
import { Avaliation } from "./pages/product/avaliation";


export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />}>
          <Route index element={<Description />} />
          <Route path="avaliation" element={<Avaliation />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}