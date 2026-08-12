import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Header />
    <Login /> */}
    <Register />
  </StrictMode>,
);
