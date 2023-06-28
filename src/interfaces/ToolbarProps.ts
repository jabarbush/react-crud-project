import User from "./User";

interface ToolbarProps {
    userList: User[];
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
}

export default ToolbarProps;