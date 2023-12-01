import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default AppLayout;
