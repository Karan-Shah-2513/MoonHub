import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Hub from "./pages/Hub";
import CreateRepo from "./components/CreateRepo";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const provider = new AuthProvider(`${import.meta.env.VITE_ARCANA_APP_ADDRESS}`);

const router = createBrowserRouter([
  {
    basename: import.meta.env.BASE_URL,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hub",
    element: <Hub />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <RouterProvider router={router} />
    </ProvideAuth>
  </React.StrictMode>
);
