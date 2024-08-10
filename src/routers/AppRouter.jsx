import React from "react";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Result_component from "../pages/Result_component";

function AppRouter() {
  const Layout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const main = createBrowserRouter([
    {
      path: "/result-summary",
      element: <Layout />,
      children: [{ index: true, element: <Result_component/> }],
    },
  ]);
  return <RouterProvider router={main} />;
}

export default AppRouter;
