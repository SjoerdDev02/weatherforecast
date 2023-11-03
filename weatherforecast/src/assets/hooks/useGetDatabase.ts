import { useEffect, useState } from 'react';
import axios from "axios";

const useGetDatabase = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userDatabase = 'http://localhost:1337/api/members';

            try {
                const response = await axios.get(userDatabase);

                if (response.status !== 200) {
                    throw new Error('Fetching van de bestaande database is mislukt. Probeer het opnieuw.');
                }

                const fetchedData = response.data.data;
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