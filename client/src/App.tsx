import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
