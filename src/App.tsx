import { useState } from "react";
import "./App.css";
import List from "./components/ListUsers";
import User from "./interfaces/User";
import Toolbar from "./components/Toolbar";
import UserInfo from "./components/UserInfo";
import Context from "./context";

function App() {
  const [userList, setUserList] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleCloseUserInfo = () => {
    setSelectedUser(null);
  };

  return (
    <Context.Provider value={{ userList, setUserList, selectedUser, setSelectedUser }}>
      <div className="app">
        <Toolbar />
        <div className={`list-container ${selectedUser ? 'active' : ''}`}>
          <List />
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
    </Context.Provider>
  );
}

export default App;
