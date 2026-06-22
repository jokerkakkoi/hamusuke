import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/main-layout";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
    }
]);