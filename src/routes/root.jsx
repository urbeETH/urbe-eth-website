import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Outlet />
    </div>
  );
}
