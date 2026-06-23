import BottomBar from "./bottom-bar";
import Topbar from "./top-bar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar />
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>
      <BottomBar />
    </div>
  );
}

export default MainLayout;
