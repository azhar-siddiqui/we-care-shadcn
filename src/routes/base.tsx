/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Component {...props} />
    </Suspense>
  );

const Status404 = Loader(
  lazy(() => import("@/content/pages/Status/Status404"))
);
const Status500 = Loader(
  lazy(() => import("@/content/pages/Status/Status505"))
);

const baseRoutes = [
  {
    path: "/",
    element: <h1 className="text-3xl">Advertizement</h1>,
  },
  {
    path: "overview",
    element: <Navigate to="/" replace />,
  },
  {
    path: "*",
    element: <Status404 />,
  },
  {
    path: "status",
    children: [
      {
        path: "500",
        element: <Status500 />,
      },
      {
        path: "maintenance",
        element: <h1 className="pt-20 text-3xl">maintenance</h1>,
      },
      {
        path: "coming-soon",
        element: <h1 className="pt-20 text-3xl">Coming Soon Feature</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <Status404 />,
  },
];

export default baseRoutes;
