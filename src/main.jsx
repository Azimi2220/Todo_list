import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout.jsx";
import TodoProvider from "./context/todoContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </StrictMode>
);
