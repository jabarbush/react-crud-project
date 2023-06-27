import User from "./User";

interface FontDropdownProps {
    selectedUser: User | null;
    options: string[];
    onOptionChange: (selectedOption: string) => void;
}

export default FontDropdownProps