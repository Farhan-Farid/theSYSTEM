import "./index.css";
import Login from "./pages/login.jsx";
import Aymaan from "./pages/aymaan.jsx";
import Mahmudul from "./pages/mahmudul.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/aymaan" element={<Aymaan />} />
        <Route path="/mahmudul" element={<Mahmudul />} />
      </Routes>
    </>
  );
}
