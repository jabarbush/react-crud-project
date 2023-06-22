import User from "./User";

interface UserInfoProps {
    selectedUser: User | null;
    onCloseUserInfo: () => void;
  }

  export default UserInfoProps;
