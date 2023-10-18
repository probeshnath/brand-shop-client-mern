import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainRoute from "./MainRoute";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute />,
      errorElement: <ErrorPage />,
      children: [
        {
            path:"/",
            element: <Home />
        },
        {
            path:"/about",
            element: <About />
        },
        {
            path:"/cart",
            element: <Cart />
        },
        {
            path:"/addproduct",
            element: <AddProduct />
        },
        {
            path:"/login",
            element: <Login />
        },
        {
            path:"/register",
            element: <Register />
        },
      ]

    },
  ]);

  export default router;