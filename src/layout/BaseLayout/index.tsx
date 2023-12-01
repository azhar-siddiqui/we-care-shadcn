import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return <div className="h-screen">{children || <Outlet />}</div>;
};

export default BaseLayout;
