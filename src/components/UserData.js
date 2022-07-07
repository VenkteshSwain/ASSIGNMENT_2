import React from "react";

const UserData = ({ user }) => {
  if (user === undefined) {
    return <h4>Please enter valid username !!!</h4>;
  }
  return (
    <table
      className="table table-striped"
      style={{ border: "1px solid black" }}
    >
      <thead>
        <tr>
          <td style={{ border: "1px solid black" }}>
            <b>PROFILE PICTURE</b>
          </td>
          <td style={{ border: "1px solid black" }}>
            <b>USERNAME</b>
          </td>
          <td style={{ border: "1px solid black" }}>
            <b>URL</b>
          </td>
          <td style={{ border: "1px solid black" }}>
            <b>FOLLOWERS URL</b>
          </td>
          <td style={{ border: "1px solid black" }}>
            <b>ORGANIZATIONS URL</b>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid black" }}>
            <img src={user.avatar_url} alt="profile" height="40%" width="40%" />
          </td>
          <td style={{ border: "1px solid black" }}>{user.login}</td>
          <td style={{ border: "1px solid black" }}>
            <a href={user.url} rel="noopener noreferrer" target="_blank">
              {user.url}
            </a>
          </td>
          <td style={{ border: "1px solid black" }}>
            <a
              href={user.followers_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {user.followers_url}
            </a>
          </td>
          <td style={{ border: "1px solid black" }}>
            <a
              href={user.organizations_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {user.organizations_url}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserData;
