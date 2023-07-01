import { useState } from "react";
import "./App.css";
import List from "./components/ListUsers";
import User from "./interfaces/User";
import Toolbar from "./components/Toolbar";
import UserInfo from "./components/UserInfo";
import DeleteUser from "./components/DeleteUser";

function App() {
  const [userList, setUserList] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showDeleteUser, setShowDeleteUser] = useState(false);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseUserInfo = () => {
    setSelectedUser(null);
  };

  const handleOpenDeleteUser = () => {
    setShowDeleteUser(true);
  };

  const handleCloseDeleteUser = () => {
    setShowDeleteUser(false);
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
          onOpenDeleteUser={handleOpenDeleteUser}
          setUserList={setUserList}
        />
      )}
      {showDeleteUser && (
        <DeleteUser userList={userList} selectedUser={selectedUser} onClose={handleCloseDeleteUser} onDeleteUser={handleCloseUserInfo} setUserList={setUserList} />
      )}
    </div>
  );
}
export default App;
