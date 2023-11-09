import { DatabaseUserType } from "../types/DatabaseType";

const useCheckRegister = () => {  
    const checkRegister = (email: string, existingUsers: DatabaseUserType[]) => {
        const validUser = existingUsers.filter((user) => {
            return user.email === email;
        });
    
        if (validUser.length === 0) {
            return true;
        } else {
            return false;
        }
    };
    
    return checkRegister;
};
  
export default useCheckRegister;  