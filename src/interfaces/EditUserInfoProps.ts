import User from "./User";

interface EditUserInfoProps {
    selectedUser: User | null;
    onCloseEditUserInfo: () => void;
}

export default EditUserInfoProps;
