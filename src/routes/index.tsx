import { RouteObject } from "react-router";
import { Navigate } from "react-router-dom";

import BaseLayout from "@/layout/BaseLayout";
import Authenticated from "@/components/common/Authenticated";
import AppLayout from "@/layout/AppLayout/AppLayout";

import dashboardsRoutes from "./dashboard";
import baseRoutes from "./base";

const router: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: baseRoutes,
  },
  {
    path: "",
    element: (
      <Authenticated>
        <AppLayout />
      </Authenticated>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        children: dashboardsRoutes,
      },
    ],
  },
];

export default router;
