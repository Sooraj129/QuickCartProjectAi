import { assets } from "@/assets/assets";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout: React.FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(true); // true initially
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-14 px-6 flex items-center justify-between bg-white border-b border-gray-200 z-40 shadow-sm">
        <img
          src={assets.logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="h-8 cursor-pointer"
        />

        {/* Show hamburger always */}
        {sideBar ? (
          <X
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={() => setSideBar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={() => setSideBar(true)}
          />
        )}
      </nav>

      {/* Sidebar */}
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />

      {/* Main content */}
      <div
        className={`pt-14 transition-all duration-300 ${
          sideBar ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
