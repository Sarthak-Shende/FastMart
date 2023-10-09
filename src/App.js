import React from 'react';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignupPage></SignupPage>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
