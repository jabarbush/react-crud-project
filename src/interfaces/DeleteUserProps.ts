import User from "./User";

interface DeleteUserProps {
    userList: User[];
    selectedUser: User | null;
    onClose: () => void;
    onDeleteUser: () => void;
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
}

export default DeleteUserProps;
