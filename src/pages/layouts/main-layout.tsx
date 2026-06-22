import BottomBar from "./bottom-bar";
import Topbar from "./top-bar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div>
      <Topbar/>
      <Outlet/>
      <BottomBar/>
    </div>
  );
}

export default MainLayout;
