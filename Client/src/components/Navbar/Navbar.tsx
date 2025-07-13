import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { ArrowRight } from "lucide-react";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar: React.FC = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  
  const handleOnOpenSignIn = () => {
    openSignIn();
  };
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
      </Link>
      {user ? (
        <UserButton />
      ) : (
        <button
          className="flex items-center gap-2 rounded-full tex-sm cursor-pointer bg-primary text-white px-10 py-2.5"
          onClick={() => handleOnOpenSignIn()}
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
