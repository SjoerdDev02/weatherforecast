import axios from "axios";
import { type FieldValues } from "react-hook-form";
import { UserType } from "../../types/UserType";

const registerUserInDatabase = async (data: FieldValues, existingUsers: UserType[]) => {
    const userDatabase = 'http://localhost:3000/users';
    const id = existingUsers.length + 1;

    const newUser: UserType = { id: id, picture: '/icons/overig/user.svg', email: data.email, firstName: data.firstName, lastName: data.lastName, password: data.password, temperature: '°C - Celcius', mode: 'Darkmode', cityOne: 'Maastricht', cityTwo: '\'s-Hertogenbosch', cityThree: 'Middelburg' }

    try {
        const response = await axios.post(userDatabase, newUser);

        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Fout bij het toevoegen van de message aan de database. Status: ${response.status}. Probeer het opnieuw.`);
        }

        return newUser;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export default registerUserInDatabase;