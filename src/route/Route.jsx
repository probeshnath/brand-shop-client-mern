import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainRoute from "./MainRoute";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import UpdateProduct from "../pages/UpdateProduct";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import BrandPage from "../pages/BrandPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brand.json")
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path: "/products/:brand",
        element: <BrandPage />,
        loader: () => fetch("http://localhost:5000/products")
      },
      {
        path: "/update/:id",
        element: <UpdateProduct />,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:"/products/:id",
        element: <ProductDetails />,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
    },
      {
        path: "/cart",
        element: <PrivateRoute><Cart /></PrivateRoute> 
      },
      {
        path: "/addproduct",
        element: <AddProduct />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]

  },
]);

export default router;