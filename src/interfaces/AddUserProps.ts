import User from "./User";

interface AddUserProps {
    onClose: () => void;
    onAddUser: (user: User) => void;
}

export default AddUserProps;
