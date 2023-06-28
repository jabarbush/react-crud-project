import User from "./User";

interface ListProps {
    userList: User[];
    selectedUser: User | null;
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
    onUserClick: (user: User) => void;
  }

  export default ListProps;
  