interface User {
    id: number;
    name: string;
    dob: string;
    phone: string;
    email: string;
    signature?: {
        pin: string;
        fontStyle: string;
    } | null;
  }
  
  export default User;
  