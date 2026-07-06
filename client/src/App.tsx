import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/ErrorPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ProductGrid } from "./pages/ProductGrid";
import { Cart } from "./pages/Cart";
import { Settings } from "./pages/Settings";
export default function App() {
  console.log(localStorage);

  // localStorage.clear();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductGrid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/setting" element={<Settings />} />

        <Route
          path="*"
          element={<ErrorPage code={404} title="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
