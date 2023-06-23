import User from "./User";

interface UserInfoProps {
    userList: User[];
    selectedUser: User | null;
    onCloseUserInfo: () => void;
  }

  export default UserInfoProps;
