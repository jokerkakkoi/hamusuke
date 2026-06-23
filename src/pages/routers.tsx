import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/main-layout";
import FinancePage from "./finance/finance";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: FinancePage,
      },
    ],
  },
]);