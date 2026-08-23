import { createBrowserRouter, Outlet } from "react-router";
import Login from "./Pages/Login.tsx";
import Register from "./Pages/Register.tsx";
import Header from "./Components/Header.tsx";
import { Home } from "./Pages/Home.tsx";
import { Orders } from "./Pages/Orders.tsx";

const Layout = () => {
  return (
    <div className="bg-[#161410 flex min-h-screen flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
