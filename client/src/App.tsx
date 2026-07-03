import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/ErrorPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ProductGrid } from "./pages/ProductGrid";
export default function App() {
  // localStorage.clear();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={<ErrorPage code={404} title="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
