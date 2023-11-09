import { useDispatch } from "react-redux";
import { setUser } from "../stores/user";
// import useGetDatabase from "./useGetDatabase";
import { UserType } from "../types/UserType";

const useCheckLogin = () => {
    const dispatch = useDispatch();

    const checkLogin = async (email: string, password: string, existingUsers: UserType[]) => {
        const validUser = existingUsers.find((user) => {
            return user.email === email && user.password === password;
        }
    );
    
      if (validUser) {
          const { id, email, firstName, lastName, temperature, mode, cityOne, cityTwo, cityThree, password, picture } = validUser;
          dispatch(setUser({ id: id, email: email, firstName: firstName, lastName: lastName, temperature: temperature, mode: mode, cityOne: cityOne, cityTwo: cityTwo, cityThree: cityThree, password: password, picture: picture }));
          return true;
      } else {
          return false;
      }
    };
    
  
    return checkLogin;
};
  
export default useCheckLogin;



/* import { DatabaseUserType } from "../types/DatabaseType";

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
  
export default useCheckRegister; */