import User from "./User";

interface UserInfoProps {
    userList: User[];
    selectedUser: User | null;
    onCloseUserInfo: () => void;
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
  }

  export default UserInfoProps;
