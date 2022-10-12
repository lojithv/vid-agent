import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/about",
    element: <About />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;