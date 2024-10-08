import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Movies from "./pages/Movies.jsx";
import AuthContainer from "./pages/AuthContainer.jsx";
import ProtectedRoutes from "./components/utils/ProtectedRoutes.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <AuthContainer />,
            },
            {
                path: "/movies",
                element: (
                    <ProtectedRoutes>
                        <Movies />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
