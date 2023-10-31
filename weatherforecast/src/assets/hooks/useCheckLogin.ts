import { useDispatch } from "react-redux";
import { setUser } from "../stores/user";
import { UserType } from "../types/UserType";
import useGetDatabase from "./useGetDatabase";

const useCheckLogin = () => {
    const dispatch = useDispatch();
    const existingUsers: UserType[] = useGetDatabase();
  
    const checkLogin = async (email: string, password: string) => {
      const validUser = existingUsers.find(
        (user) => user.email === email && user.password === password
      );
  
      if (validUser) {
        const { id, picture, email, firstName, lastName, password, temperature, mode, cityOne, cityTwo, cityThree } = validUser;
        dispatch(setUser({ id, picture, email, firstName, lastName, password, temperature, mode, cityOne, cityTwo, cityThree }));
        return true;
      } else {
        return false;
      }
    };
  
    return checkLogin;
};
  
export default useCheckLogin;  