// import CreateUser from "./CreateUser";

import { useEffect, useState } from "react";
import { GetUsers } from "./UsersManagementController";
import CreateUser from "./CreateUser";

const UsersManagement = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fecthUsers = async() => {
      return await GetUsers();
    };

    fecthUsers().then(result => setUsers(result));
}, []);

  console.log(users);
  

  return <div>
    UsersManagement
    <CreateUser />

    </div>;
};

export default UsersManagement;
