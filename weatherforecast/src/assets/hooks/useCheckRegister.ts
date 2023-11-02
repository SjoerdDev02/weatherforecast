import useGetDatabase from "./useGetDatabase";
import { DatabaseUserType } from "../types/DatabaseType";

const useCheckRegister = () => {
    const existingUsers: DatabaseUserType[] = useGetDatabase();
  
    const checkRegister = async (email: string) => {
        const validUser = existingUsers.filter((user) => {
            return user.attributes.email === email;
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