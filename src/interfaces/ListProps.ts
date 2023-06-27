import User from "./User";

interface ListProps {
    userList: User[];
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
  }

  export default ListProps;
  