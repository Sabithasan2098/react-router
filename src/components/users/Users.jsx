import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Users:{users.length}</h1>
      <div className="grid grid-cols-2">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
