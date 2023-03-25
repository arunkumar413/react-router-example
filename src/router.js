import { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Layout } from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);
