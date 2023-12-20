import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import HOME from "./Components/Home/HOME.jsx";
import WhyUsPage from "./Components/WhyUsPage/WhyUsPage.jsx";
import Services from "./Components/ServicesPage/Services.jsx";
import ProjectPage from "./Components/ProjectsPage/ProjectPage.jsx";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollTop />

        <App>
          <HOME></HOME>
        </App>
      </>
    ),
    children: [
      {
        path: "/",
        element: <HOME></HOME>,
      },
      {
        path: "/why-us",
        element: <WhyUsPage></WhyUsPage>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/projects",
        element: <ProjectPage></ProjectPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
