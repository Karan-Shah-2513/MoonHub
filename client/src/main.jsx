import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import { ToastContainer } from "react-toastify";

// components
import Navbar from "./components/Navbar";
import CreateRepo from "./components/CreateRepo";

// pages
import Hub from "./pages/Hub";
import Landing from "./pages/Landing";

const provider = new AuthProvider(`${import.meta.env.VITE_ARCANA_APP_ADDRESS}`);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<App/>}>
      <Route path="" element={<Landing />} />
      <Route path="hub" element={<Hub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ProvideAuth>
  </React.StrictMode>
);
