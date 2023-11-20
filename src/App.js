import React, { useEffect } from 'react';
import SignupPage from './pages/SignupPage';
import Home from "./pages/Home"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Protected from './features/auth/components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        {" "}
        <Home></Home>{" "}
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        {" "}
        <CartPage></CartPage>{" "}
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        {" "}
        <Checkout></Checkout>{" "}
      </Protected>
    ),
  },
  {
    path: "/product-details/:id",
    element: (
      <Protected>
        {" "}
        <ProductDetailsPage></ProductDetailsPage>{" "}
      </Protected>
    ),
  },
]);

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch,user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
