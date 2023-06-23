import User from "./User";

interface AddUserProps {
    userList: User[];
    onClose: () => void;
    onAddUser: (user: User) => void;
}

export default AddUserProps;
