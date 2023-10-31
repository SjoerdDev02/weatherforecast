import { useEffect, useState } from 'react';
import axios from "axios";
import { UserType } from "../types/UserType";

const useGetDatabase = (): UserType[] | [] => {
    const [data, setData] = useState<UserType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const userDatabase = 'http://localhost:3000/users';

            try {
                const response = await axios.get(userDatabase);

                if (response.status !== 200) {
                    throw new Error('Fetching van de bestaande database is mislukt. Probeer het opnieuw.');
                }

                const fetchedData: UserType[] = response.data;
                setData(fetchedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return data;
};

export default useGetDatabase;