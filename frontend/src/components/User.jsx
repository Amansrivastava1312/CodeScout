import { useState } from "react";
import { FaCodeBranch } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

const User = ({ user }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const onHandleClick = async () => {
    navigate("/");
    setUsername(user.login);
    console.log(user);
  };

  return (
    <li className="mb-10 ms-7">
      <span
        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100
    rounded-full -start-3 ring-8 ring-white"
      >
        <FaCodeBranch className="w-5 h-5 text-blue-800" />
      </span>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div
          className="flex flex-col items-center pb-10"
          onClick={onHandleClick}
        >
          <img
            className="w-24 h-24 my-3 rounded-full shadow-lg"
            src={user?.avatar_url}
            alt="User image"
          />
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {user?.login}
          </h5>
        </div>
      </div>
    </li>
  );
};
export default User;
