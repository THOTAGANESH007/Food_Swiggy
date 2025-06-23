import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import App from "./App.jsx";
import Error from "./Error.jsx";
import About from "./About.jsx";
import ContactUs from "./ContactUs.jsx";
import Body from "./Body.jsx";
import RestaurantMenu from "./RestaurantMenu.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/restaurantMenu/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
