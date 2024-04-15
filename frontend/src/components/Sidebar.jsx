import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import { TbUserSearch } from "react-icons/tb";
import { FaUserPen } from "react-icons/fa6";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
      overflow-y-auto border-r bg-glass"
    >
      <nav className="h-full flex flex-col gap-3">
        <Link to="/" className="flex justify-center">
          <img
            className="h-8"
            src={
              "data:image/png;base64,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"
            }
            alt="Github Logo"
          />
        </Link>

        <Link
          to="/"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800"
        >
          <IoHomeSharp size={20} />
        </Link>

        {authUser && (
          <Link
            to="/explore"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <MdOutlineExplore size={25} />
          </Link>
        )}

        {authUser && (
          <Link
            to="/explore_user"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <TbUserSearch size={25} />
          </Link>
        )}

        {!authUser && (
          <Link
            to="/login"
            className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <PiSignInBold size={25} />
          </Link>
        )}

        {!authUser && (
          <Link
            to="/signup"
            className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <FaUserPen size={25} />
          </Link>
        )}

        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};
export default Sidebar;
