import { useState } from "react";
import "./App.css";
import List from "./components/ListUsers";
import User from "./interfaces/User";
import Toolbar from "./components/Toolbar";
import UserInfo from "./components/UserInfo";

function App() {
  const [userList, setUserList] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseUserInfo = () => {
    setSelectedUser(null);
  };

  return (
    <div className="app">
      <Toolbar userList={userList} setUserList={setUserList} />
      <div className={`list-container ${selectedUser ? 'active' : ''}`}>
        <List userList={userList} setUserList={setUserList} selectedUser={selectedUser} onUserClick={handleUserClick} />
      </div>
      {selectedUser && (
        <UserInfo
          userList={userList}
          selectedUser={selectedUser}
          onCloseUserInfo={handleCloseUserInfo}
          setUserList={setUserList}
        />
      )}
    </div>
  );
}

export default App;
