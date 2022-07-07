import React, { useState } from "react";
import { useGetUserFromUserName } from "../hooks/useGetUserFromUserName";
import UserForm from "./UserForm";
import UserData from "./UserData";

const User = () => {
  const [user, setUser] = useState();
  const { isLoading, isError, error, data } = useGetUserFromUserName(user);

  const onSubmit = ({ userName }) => {
    setUser(userName);
  };

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error: {error.message} try again</h2>;

  return (
    <div>
      <UserForm onSubmit={onSubmit} user={user} setUser={setUser} />
      {user !== undefined && (
        <UserData
          user={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      )}
    </div>
  );
};

export default User;
