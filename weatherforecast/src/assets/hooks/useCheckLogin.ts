import { useDispatch } from "react-redux";
import { setUser } from "../stores/user";
import useGetDatabase from "./useGetDatabase";
import { DatabaseUserType } from "../types/DatabaseType";

const useCheckLogin = () => {
    const dispatch = useDispatch();
    const existingUsers: DatabaseUserType[] = useGetDatabase();

    const checkLogin = async (email: string, password: string) => {
      const validUser = existingUsers.find((user) => {
            return user.attributes.email === email && user.attributes.password === password;
        }
      );
    
      if (validUser) {
        const { attributes } = validUser;
        const { memberId, email, firstName, lastName, temperature, mode, cityOne, cityTwo, cityThree, password, picture } = attributes;
        dispatch(setUser({ memberId: memberId, email: email, firstName: firstName, lastName: lastName, temperature: temperature, mode: mode, cityOne: cityOne, cityTwo: cityTwo, cityThree: cityThree, password: password, picture: picture }));
        return true;
      } else {
        return false;
      }
    };
    
  
    return checkLogin;
};
  
export default useCheckLogin;