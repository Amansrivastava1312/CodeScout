import User from "./User";

const Users = ({ users, alwaysFullWidth = false }) => {
  const className = alwaysFullWidth ? "w-full" : "lg:w-2/3 w-full";

  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-200">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ol>
    </div>
  );
};
export default Users;
