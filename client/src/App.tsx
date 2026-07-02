import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/ErrorPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={<ErrorPage code={404} title="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
