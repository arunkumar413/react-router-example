import { Sidebar } from "./Sidebar";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <div className="app-container">
        <Sidebar />

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
