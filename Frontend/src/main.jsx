import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Explore from "./pages/Explore.jsx";
import Likes from "./pages/Likes.jsx";
import Home from "./pages/Home.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import {
  PrivateRoute,
  PublicRoute,
} from "./components/PublicandProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: "/explore",
        element: (
          <PrivateRoute>
            <Explore />
          </PrivateRoute>
        ),
      },
      {
        path: "/likes",

        element: (
          <PrivateRoute>
            <Likes />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
