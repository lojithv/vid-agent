import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/about";
import Login from "../pages/login";
import ManageVids from "../pages/manage_vids";
import Signup from "../pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "about",
    element: <About />,
    children: [],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "manage-vids",
    element: <ManageVids />,
  },
]);

export default router;