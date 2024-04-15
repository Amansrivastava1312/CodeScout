import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Users from "../components/Users";
import { IoSearch } from "react-icons/io5";
import Search from "../components/Search";

const ExploreUsers = () => {
  // https://api.github.com/search/users?q=${user}&sort=stars&order=desc&per_page=10
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState("");

  const [username, setUsername] = useState("");

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    const user = username;

    try {
      const res = await fetch("/api/explore/users/" + user);
      const { users } = await res.json();
      setUsers(users);
      setSelectedUsers(user);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="px-4">
        <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
          <h1 className="text-xl font-bold text-center">
            Explore Popular Users
          </h1>
          <div className="flex flex-wrap gap-2 my-2 justify-center">
            <Search onSearch={onSearch} />
          </div>
          {!loading && <Users users={users} alwaysFullWidth />}
          {loading && <Spinner />}
        </div>
      </div>
    </>
  );
};

export default ExploreUsers;
