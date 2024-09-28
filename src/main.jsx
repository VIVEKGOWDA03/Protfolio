import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js"
import App from "./App.jsx";
import "./index.css";
import Myfamily from "./componets/Myfamily.jsx";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        path: "/",
        element: <Myfamily/> 
      },
    
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
