import React, { useContext } from "react";
import { ReactComponent as PanelLeftClose } from "../assets/panel-left-close.svg";
import Context from "../context";
import User from "../interfaces/User";

  function List() {
    const { userList, selectedUser, onUserClick } = useContext(Context);
  return (
    <div>
      <div className="list-container">
        {userList.map((user: User) => (
          <div
            key={user.id}
            className={`card ${selectedUser === user ? "active" : ""}`}
          >
            <div>
              <div className="user-name">{user.name}</div>
              <div className="dob-card">DOB: {user.dob}</div>
            </div>
            <div
              className={`signature-status ${
                user.signature ? "green" : "red"
              }`}
            >
              {user.signature
                ? "Has Custom Signature"
                : "Missing Custom Signature"}
            </div>
            <PanelLeftClose
              onClick={() => onUserClick(user)}
              className="panel-icon"
              style={{
                color: selectedUser === user ? "#1890ff" : "",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
