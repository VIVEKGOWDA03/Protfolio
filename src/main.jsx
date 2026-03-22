import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import App from "./App.jsx";
import "./index.css";
import Portfolilo from "./componets/Portfolio.jsx";
import Test from "./componets/Test.jsx";
import Example from "./componets/Example.jsx";
import Test2 from "./componets/Test2.jsx";
import Projects from "./componets/Projects.jsx";
// import { CRUD } from "./Pages/CRUD.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Portfolilo />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "ex",
        element: <Example />,
      },
      {
        path: "ex1",
        element: <Test2 />,
      },
      //       {
      //   path: "crud",
      //   element: <CRUD />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
