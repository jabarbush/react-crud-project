import User from "./User";

interface EditUserInfoProps {
    selectedUser: User | null;
    onCloseEditUserInfo: () => void;
    setUserList: React.Dispatch<React.SetStateAction<User[]>>;
}

export default EditUserInfoProps;
