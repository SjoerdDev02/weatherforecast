import { UserType } from "../types/UserType";
import useGetDatabase from "./useGetDatabase";

const useCheckRegister = () => {
    const existingUsers: UserType[] = useGetDatabase();
  
    const checkRegister = async (email: string) => {
        const validUser = existingUsers.filter((user) => {
            return user.email === email;
        });
        console.log(validUser);
    
        if (validUser.length === 0) {
            return true;
        } else {
            return false;
        }
      };
  
    return checkRegister;
};
  
export default useCheckRegister;  