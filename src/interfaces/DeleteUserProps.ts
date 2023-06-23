import User from "./User";

interface DeleteUserProps {
    userList: User[];
    selectedUser: User | null;
    onClose: () => void;
    onDeleteUser: () => void;
}

export default DeleteUserProps;
