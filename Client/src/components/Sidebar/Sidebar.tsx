import type { sideBarI } from "@/Interface/sidebar.interface";
import { useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  User2,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC<sideBarI> = ({ sideBar, setSideBar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  const navItems = [
    { to: "/ai", label: "Dashboard", icon: House },
    { to: "/ai/write-article", label: "Write Article", icon: SquarePen },
    { to: "/ai/blog-titles", label: "Blog Titles", icon: Hash },
    { to: "/ai/generate-images", label: "Generate Images", icon: Image },
    { to: "/ai/remove-background", label: "Remove Background", icon: Eraser },
    { to: "/ai/remove-object", label: "Remove Object", icon: Scissors },
    { to: "/ai/review-resume", label: "Review Resume", icon: FileText },
    { to: "/ai/community", label: "Community", icon: Users },
  ];

  return (
    <div
      className={`w-64 h-full bg-gradient-to-b from-blue-600 to-indigo-700 text-white 
        fixed top-14 left-0 z-50 
        transition-transform duration-300 ease-in-out
        ${sideBar ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="my-6 w-full text-center px-4">
        <img
          src={user?.imageUrl}
          alt="User"
          className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-md"
        />
        <h1 className="mt-3 text-lg font-semibold">{user?.fullName}</h1>

        <div className="mt-6 flex flex-col gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSideBar(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-blue-700 transition-colors ${
                  isActive ? "bg-white text-blue-700" : ""
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{label}</span>
            </NavLink>
          ))}
        </div>

        <p className="text-sm opacity-80 mt-4">
          {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>

      <div className="flex flex-col gap-2 px-6 mt-6">
        <button
          onClick={() => openUserProfile()}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
        >
          <User2 className="w-5 h-5" />
          <span>Edit Profile</span>
        </button>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="text-center text-xs py-5 text-white/70">
        &copy; {new Date().getFullYear()} MyApp Inc.
      </div>
    </div>
  );
};

export default Sidebar;
