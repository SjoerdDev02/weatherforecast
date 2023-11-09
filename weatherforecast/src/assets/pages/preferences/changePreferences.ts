import axios from "axios";
import { UserType } from "../../types/UserType";

const changePreferences = async (changedUser: UserType) => {
    const databaseUrl = `http://localhost:3000/users/${changedUser.id}`;

    try {
        const response = await axios.put(databaseUrl, changedUser);

        if (response.status !== 200 && response.status !== 201) {
            throw new Error(`Fout bij het toevoegen van de message aan de database. Status: ${response.status}. Probeer het opnieuw.`);
        }

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export default changePreferences;